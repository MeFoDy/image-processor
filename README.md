# image-processor

```
brew install joedrago/repo/avifenc
npm i
npm run help
```

## tasks
```
Usage: gulp [task] [options]
Tasks:
  Convert
     convert         Convert all images
                     Depends: ["convert:retina","convert:webp","convert:avif"]
     convert:avif    Convert jpg and png to avif
     convert:retina  Convert jpg and png to @2x and @1x sizes
     convert:webp    Convert jpg and png to webp
  Misc
     help            Prints this help text
  Optimize
     optimize:guetzli Optimize jpeg using guetzli
     optimize:png    Optimize png using pngquant
     optimize:svg    Optimize svg using svgo
  Utils
     clean           Cleans the dist directory
```
