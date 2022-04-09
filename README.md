# maps

[faker library](https://npm.runkit.com/faker) - generate massive amounts of fake data in the browser and node.js

Type Definition file - adapter to JS library. Tell Typescript compiler what types are available. ie. @types/faker

typescript recommends to not use default so we always need curly braces. Modules might use default and we dont use curly braces then..but that is an ok exception.

Ideas about this project

1. We wanted to restrict access to google maps by adding a private modifier so others could not access it.

2. CustomMap was a blackbox where we only expose two things, create instance and add marker.

3. To avoid duplicate code, we decided to use addMarker and inverted dependencies. All classes that want to addMarket to CustomMap they have to implement interface Mappable. CustomMap tells other classes if you want to be an argument you must implement this structure.

4. Very low coupling between classes.

5. Help Typescript to show errors in the right location.

setup

parcel index.html
