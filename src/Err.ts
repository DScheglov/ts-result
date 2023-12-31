import {
  Result, AsyncErr, SymbolErr, Err,
} from './types';

export class ErrImpl<E> implements Err<E> {
  private error!: E; // making field observable for js to allow comparison in tests

  declare readonly kind: typeof SymbolErr;

  constructor(error: E) {
    this.error = error;
  }

  isOk() { // eslint-disable-line class-methods-use-this
    return false;
  }

  isErr() { // eslint-disable-line class-methods-use-this
    return true;
  }

  map(): Result<never, E> {
    return this;
  }

  mapErr<F>(fn: (error: E) => F): Result<never, F> {
    return new ErrImpl(fn(this.error));
  }

  chain(): Result<never, E> {
    return this;
  }

  chainErr<S, F>(next: (error: E) => Result<S, F>): Result<S, F> {
    return next(this.error);
  }

  unwrap(): never {
    throw new TypeError('Cannot unpack an Err result', { cause: this.error });
  }

  unwrapOr<S>(fallback: S): S { // eslint-disable-line class-methods-use-this
    return fallback;
  }

  unwrapOrElse<S>(fallback: (error: E) => S): S {
    return fallback(this.error);
  }

  unwrapErr(): E {
    return this.error;
  }

  unwrapErrOr(): E {
    return this.error;
  }

  unwrapErrOrElse(): E {
    return this.error;
  }

  unpack(): E {
    return this.error;
  }

  match<TR, ER>(
    okMatcher: (data: never) => TR,
    errMatcher: (error: E) => ER,
  ): ER {
    return errMatcher(this.error);
  }

  tap(): Result<never, E> {
    return this;
  }

  tapErr(fn: (error: E) => void): Result<never, E> {
    fn(this.error);
    return this;
  }

  apply() {
    return this;
  }
}

(ErrImpl.prototype as any).kind = SymbolErr;
Object.defineProperty(
  ErrImpl.prototype.constructor,
  'name',
  { enumerable: false, value: 'Err' },
);

export const err = <E>(error: E): Err<E> => new ErrImpl(error);
export const asyncErr = async <E>(error: E | Promise<E>): AsyncErr<E> =>
  err(await error);
