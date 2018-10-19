## Tutorial ##
Hvordan kjøre applikasjonen
For å kjøre applikasjonen trenger du git, npm og expo-cli. Se npm sine egne sider for installasjon av npm.

For å installere expo-cli kan du kjøre

```
     npm install -g expo-cli

```

Klone kodebase
```
    git clone git@github.com:IT2810/it2810-webutvikling-h18-prosjekt-3-43.git # Klone kodebase
```

 Installerer alle dependencies
```
    npm install 
```

Ser på start-verdien i package.json og kjørerer expo start
```
    npm start  
```

Når expo-prosessen kjører kan man trykke i (på Mac) for å åpne applikasjonen i
iOS simulator


## Testing ##
Applikasjonen ble testet på iOS simulator, samt android-telefon (Samsung S8)

Enhetstester er skrevet i jest. I utgangspunktet har vi ikke så mye å teste,
så vi tester om snapshots


## Valg ##
### Asyncstorage ###
For lagring av data i applikasjonen brukes asyncstorage. Asyncstorage er et api
for persistent lagring av nøkkel-verdi par. Verdien man lagrer er en streng -
som man jobber seg rundt i javascript med å gjøre om objekter til strenger før
lagring. Når man henter ut verdien igjen gjør man det om til JSON, gitt at det
er et objekt man har lagret. Vi bruker to metoder fra asyncstorage; setItem og
getItem. Begge metodene returnerer et Promise - så for å faktisk få verdien ut
av metodekallene må man tildele/oppdatere returverdien fra et promise til
f.eks. state-objektet i en react-komponent. 

### React-native-maps ###
Når man oppretter en task kan man geotagge hvor man opprettet den. Man kan på
den første skjermen man møter se et kart med alle task-ene sine. Det vi oppdaget
under testingen er at det eksisterer en bug i geolocation-apiet for android.

## Samarbeid ##
Vi brukte prosjekt-fanen på github til å definere oppgaver. I utgangspunktet
startet vi alt for sent med arbeidet, så det ble ikke brukt spesielt
konstruktivt. For å redde litt poeng på prosjektet endret vi scopet vi hadde
satt for oss selv på oppgaven. Vi hadde en plan om å implementere et
kalender-view og kontakter i applikasjonen også, men vi rakk ikke å gjøre det.
Det ble forsøkt å bruke git fornuftig til å gjøre feature-branching, så noe av arbeidet
ble merget inn i master med pull-requests. Likevel ble en del pushet rett til master.
