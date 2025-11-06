function printTicketPrice(visitorAge, isStudent) {
    if (visitorAge > 6) {
        if (isStudent) {
            console.log("Cena 5 Eur");
            return 5;
        }
        else {
            console.log("Cena 10 Eur");
            return 10;
        }
    }
    console.log("Biļete bezmaksas");
    return 0;
}

printTicketPrice(12, true);
printTicketPrice(35, false);
printTicketPrice(4, false);