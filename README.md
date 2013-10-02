# mung

mess with data in files using node

## example

`img/codfish.munged.jpg` was created by running

```bash
$ node ./cmd --input img/codfish.jpg --skip 10000 > img/codfish.munged.jpg
```
and `img/codfish.munged.random1.jpg` through `img/codfish.munged.random3.jpg` were created by running

```bash
$ node ./cmd --input img/codfish.jpg --skip 10000 -r random
```

three times with the output directed to the three images

if you look at the source you will notice that this "needs more work"

