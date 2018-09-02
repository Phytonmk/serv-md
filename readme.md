
# Serv-md

Simple tool to create your .md files with

* Terminal
* Browser
* Your favourite text editror

Also supports math formulas


## How to use

Install it via npm or yarn

```
npm i -g serv-md
```

```
yarn global add serv-md
```

Start via cli

```
serv-md path/to/your/cool/readme.md --open
```

To use math formuals start your *math* line with "**%**"
```
 %e=mc^2
```
will display

![math formula](http://www.sciweavers.org/tex2img.php?bc=White&fc=Black&im=jpg&fs=12&ff=arev&eq=e=mc^2)


Flags
* --open
* --no-math
* --encoding
* --port