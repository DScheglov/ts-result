npx -y dts-bundle --name @cardellini/ts-result --main ./lib/index.d.ts --out ../dist/result.d.ts
npx -y dts-bundle --name @cardellini/ts-result/base --main ./lib/base.d.ts --out ../dist/base.d.ts
npx -y dts-bundle --name @cardellini/ts-result/fn --main ./lib/fn/index.d.ts --out ../../dist/fn.d.ts
npx -y dts-bundle --name @cardellini/ts-result/do --main ./lib/do.d.ts --out ../dist/do.d.ts
npx -y dts-bundle --name @cardellini/ts-result/methods --main ./lib/methods.d.ts --out ../dist/methods.d.ts
npx -y dts-bundle --name @cardellini/ts-result/lists --main ./lib/lists.d.ts --out ../dist/lists.d.ts
npx -y dts-bundle --name @cardellini/ts-result/sync --main ./lib/sync.d.ts --out ../dist/sync.d.ts
npx -y dts-bundle --name @cardellini/ts-result/sync/do --main ./lib/do-gen.d.ts --out ../dist/sync/do.d.ts
npx -y dts-bundle --name @cardellini/ts-result/sync/methods --main ./lib/sync-methods.d.ts --out ../dist/sync/methods.d.ts
npx -y dts-bundle --name @cardellini/ts-result/async --main ./lib/async.d.ts --out ../dist/async.d.ts
npx -y dts-bundle --name @cardellini/ts-result/async/do --main ./lib/async-do-gen.d.ts --out ../dist/async/do.d.ts
npx -y dts-bundle --name @cardellini/ts-result/async/methods --main ./lib/async-methods.d.ts --out ../dist/async/methods.d.ts