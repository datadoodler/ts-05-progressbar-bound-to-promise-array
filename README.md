# Progressbar Bound to Promise Array

#### Scenario
The application is periodically caching images (asynchronously). Whenever images are being pulled over the wire we want to show the progressbar (angular bootstrap directive) and the percentage complete of the images. Progressbar doesn't need to show the percent downloaded of a single image, but the percentage of the list of images that have completed (or failed) download.  

#### Dependencies
(Note: these dependencies are statically loaded in the vendor_local directory of this techsketch to enable disconnected editing and viewing on demo site)

* angular  AngularJS v1.3.20
* angular-animate AngularJS v1.3.20
* angular-ui-bootstrap Version: 0.12.1 - 2015-02-20
* bootstrap css (an custom edited version of v3.3.6)

