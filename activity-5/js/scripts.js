var myObject = ['name',
                'description',
                'author',
                'downloads',
                'stars',
                'image'];

function Article(name, description, author, downloads, stars, image) {
this.name = name;
this.description = description;
this.author = author;
this.stars = stars;
this.image = image;
this.downloads = function() {
  return this.downloads Number(x).toLocaleString()
  };
}

var myObject1 = new Article(File Icons, 20 best Atom packages, Alhadis, 6476017, 5418, file-icon.png);
var myObject2 = new Article(Pigments, 20 best Atom packages, abe33, 2537038, 3600, pigments.png);
var myObject3 = new Article(Project Manager, 20 best Atom packages, Daniel Brodin, 922637, 2188, projectmanager.gif);
