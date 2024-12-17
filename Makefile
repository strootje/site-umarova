# {{{
i: deno.json; @deno i --allow-scripts=npm:@parcel/watcher
build: i; @deno task build
dev: i; @deno task dev
# }}}
