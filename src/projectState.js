//Import Images
import database from '../src/img/database.png';
import pythonSelenium from '../src/img/pythonSelenium.png';
import xamarin from '../src/img/xamarin.png';

export const ProjectState = () => {
  return [
    {
      title: "The Database",
      mainImg: database,
      secondaryImg: database,
      url: "/work/the-database",
      awards: [
        {
          title: "Databases",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Database 2.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Database 3",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Python & Selenium",
      mainImg: pythonSelenium,
      url: "/work/python-selenium",
      secondaryImg: pythonSelenium,
      awards: [
        {
          title: "Py",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Sel",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "PySel",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Xamarin Forms",
      mainImg: xamarin,
      url: "/work/the-xamarin",
      secondaryImg: xamarin,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};

export default ProjectState;