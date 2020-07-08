const qualifications = [
  {
    institution: "Pontificia Universidad Católica de Chile",
    title: "Agronomy Engineering",
    start: new Date(2008),
    finish: new Date(2013),
    skills: [
      "Urban Planning",
      "Conservation Biology",
      "Forest Restoration",
      "Ecology",
      "Wildlife Management",
    ],
  },
  {
    institution: "Lund University",
    title: "MSc in Geomatics",
    start: new Date(2016),
    finish: new Date(2018),
    skills: [
      "GIS",
      "Geographical Databases",
      "Satellite Remote Sensing",
      "Algorithms in Geomatics",
      "Statistics",
      "R",
      "MatLab",
      "Python",
      "PostGIS",
      "GeoServer",
    ],
  },
  {
    institution: "Chas Academy",
    title: "Fullstack Web Developtment",
    start: new Date(2019),
    finish: "Currently studying",
    skills: [
      "JavaScript",
      "React",
      "Angular",
      "PHP",
      "Laravel",
      "Node",
      "CSS",
      "HTML",
      "MySQL",
      "MongoDB",
      "Wordpress",
    ],
  },
];

export function getQualifications() {
  return qualifications;
}
