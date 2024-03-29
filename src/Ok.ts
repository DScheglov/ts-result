import { AsyncOk, Result } from './types';

export class OkImpl<T> implements Result<T, never> {
  constructor(public readonly value: T) {}

  isOk() { // eslint-disable-line class-methods-use-this
    return true;
  }

  isErr() { // eslint-disable-line class-methods-use-this
    return false;
  }

  map<S>(fn: (value: T) => S): Result<S, never> {
    return new OkImpl(fn(this.value));
  }

  mapErr(): Result<T, never> {
    return this as Result<T, never>;
  }

  chain<S, F>(next: (value: T) => Result<S, F>): Result<S, F> {
    return next(this.value);
  }

  chainErr(): Result<T, never> {
    return this;
  }

  unwrap(): T {
    return this.value;
  }

  unwrapOr(): T {
    return this.value;
  }

  unwrapOrElse(): T {
    return this.value;
  }

  unwrapErr(): never {
    throw new TypeError('Result is not an Err', { cause: this });
  }

  unwrapErrOr<F>(fallback: F): F { // eslint-disable-line class-methods-use-this
    return fallback;
  }

  unwrapErrOrElse<F>(fallback: (value: T) => F): F {
    return fallback(this.value);
  }

  unpack(): T {
    return this.value;
  }

  match<TR>(okMatcher: (value: T) => TR): TR {
    return okMatcher(this.value);
  }

  tap(fn: (value: T) => void): Result<T, never> {
    fn(this.value);
    return this;
  }

  tapErr(): Result<T, never> {
    return this;
  }

  apply<S, F>(result: Result<(data: T) => S, F>): Result<S, F> {
    return result.map((fn) => fn(this.value));
  }

  * unwrapGen(): Generator<never, T> { // eslint-disable-line require-yield
    return this.value;
  }

  unwrapOrThrow(): T {
    return this.value;
  }

  * [Symbol.iterator](): Generator<never, T> { // eslint-disable-line require-yield
    return this.value;
  }

  biMap<S>(okFn: (value: T) => S): Result<S, never> {
    return this.map(okFn);
  }

  biChain<S, F>(okFn: (data: T) => Result<S, F>): Result<S, F> {
    return okFn(this.value);
  }
}

Object.defineProperty(
  OkImpl,
  'name',
  { enumerable: false, value: 'Ok' },
);

export const ok = <T>(value: T): Result<T, never> => new OkImpl(value);
export const asyncOk = async <T>(value: T | Promise<T>): AsyncOk<T> =>
  ok(await value);
