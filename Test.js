const numOfLetters = (input) => {
    let x = 0;
    for (let ch of input) {
        if (ch === "a"||ch ==="b"||ch ==="c"||ch ==="d"||ch ==="e"||ch ==="f"||ch ==="g"||ch ==="h"||ch ==="i"||ch ==="j"||ch ==="k"||
        ch =="l"||ch ==="m"||ch ==="n"||ch ==="o"||ch ==="p"||ch ==="q"||ch ==="r"||ch ==="s"||ch ==="t"||ch ==="u"||ch ==="v"||
        ch ==="w"||ch ==="x"||ch ==="y"||ch ==="z" ||
        ch === "A"||ch ==="B"||ch ==="c"||ch ==="D"||ch ==="E"||ch ==="F"||ch ==="G"||ch ==="H"||ch ==="I"||ch ==="J"||ch ==="K"||
        ch =="L"||ch ==="M"||ch ==="N"||ch ==="O"||ch ==="P"||ch ==="Q"||ch ==="R"||ch ==="S"||ch ==="T"||ch ==="U"||ch ==="V"||
        ch ==="W"||ch ==="X"||ch ==="Y"||ch ==="Z" ) {
            x++;
        }
        else  {
            continue;
        }

    }
    console.log(x) 
    }
numOfLetters("^^Ha%h   a$ $$h");