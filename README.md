- Prosjektet dokumenteres med en README.md i git repositoriet.
- Dokumentasjonen skal diskutere, forklare og vise til alle de viktigste
  valgene og løsningene som gruppa gjør (inklusive valg av komponenter og api).
- Koden skal være lettlest og godt strukturert slik at den er lett å sette seg
  inn i. Bruk av kommentarer skal være tilpasset at eksterne skal inspisere
koden.
- Gruppas valg av teknologi som utforskes (jmfr krav til innhold) skal
  dokumenteres i tutorials form slik at andre lett kan lære av eksempelet dere
  lager (dvs. gi en liten introduksjon til hva og hvordan).
- Gruppa skal oppsummere den enkeltes bidrag i prosjektet i en egen fil som
  leveres i BB (dette er personopplysninger som ingen vil at skal ligge på git
;-)



Tutorial
Hvordan kjøre applikasjonen
For å kjøre applikasjonen trenger du git, npm og expo-cli. Se npm sine egne sider for installasjon av npm.

For å installere expo-cli kan du kjøre
npm install -g expo-cli

git clone git@github.com:IT2810/it2810-webutvikling-h18-prosjekt-3-43.git
npm install # Installerer alle dependencies
npm start # Ser på start-verdien i package.json og kjørerer expo start

Når expo-prosessen kjører kan man trykke i (på Mac) for å åpne applikasjonen i
iOS simulator

Testing
TBA


Valg
Asyncstorage
For lagring av data i applikasjonen brukes asyncstorage. Asyncstorage er et api
for persistent lagring av nøkkel-verdi par. Verdien man lagrer er en streng -
som man jobber seg rundt i javascript med å gjøre om objekter til strenger før
lagring. Når man henter ut verdien igjen gjør man det om til JSON, gitt at det
er et objekt man har lagret. Vi bruker to metoder fra asyncstorage; setItem og
getItem. Begge metodene returnerer et Promise - så for å faktisk få verdien ut
av metodekallene må man tildele/oppdatere returverdien fra et promise til
f.eks. state-objektet i en react-komponent. 

React-native-maps

Samarbeid
Vi brukte prosjekt-fanen på github til å definere oppgaver. I utgangspunktet startet
vi alt for sent med arbeidet, så det ble ikke brukt spesielt konstruktivt. For å redde
litt poeng på prosjektet endret vi scopet vi hadde satt for oss selv på oppgaven.
