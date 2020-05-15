# score.js
A lightweight, open-source, jQuery like framework.

## Building
Run the file `buildTools.jar` to 'compile' score.js into one single file. For more information on using buildTools,
or to view / edit the source code, visit it's repository, [buildTools](https://github.com/Wobblyyyy/buildtools).

### Build Options / Flags
+ `-current` rather than creating another versioned file titled with the date at the time
of compilation, `-current` creates or overwrites the a file `score.js`.
+ `-nomin` `-qb` `-quick` doesn't use the JavaScript minifier API and instead just
compiles all of the files together. Faster, and doesn't require an internet connection,
but also does not compress anything at all.
+ `-silent` disable logging / console outputting while & after running the build tools
utility program.

## Using
It's pretty similar to jQuery in a lot of regards. To say the least, it was definitely inspired by jQuery, but with
different goals in mind - primarily, being a smaller and more lightweight implementation of many of the features which make
jQuery so useful.

## Download
score.js is available for download under the 'releases' section on the GitHub page.

## Documentation
I'm still adding documentation, but you can visit the wiki to see the current documentation
that I've already written about using score.js.
