import GoodBurgers from "../assets/projects/goodburgers.png";
import TripGo from "../assets/projects/tripgo.png";
import TimberLine from "../assets/projects/timberline.png";
import BillSplitter from "../assets/projects/billsplitter.png";
import CountriesApp from "../assets/projects/countriesapp.png";
import TheShoeCompany from "../assets/projects/theshoecompany.png";
import TicTacToe from "../assets/projects/tictactoe.png";
import RockPaperScissors from "../assets/projects/rockpaperscissors.png";
import ReactClock from "../assets/projects/reactclock.png";
import BiteBuddy from "../assets/projects/bitebuddy.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: GoodBurgers,
      live: "https://goodburgers.netlify.app",
      code: "https://github.com/subhadip31/Good-Burgers-Website",
      title: "Good Burgers",
    },
    {
      id: 2,
      src: TimberLine,
      live: "https://timberline.netlify.app",
      code: "https://github.com/subhadip31/Timberline-Furniture-Website",
      title: "Timberline",
    },
    {
      id: 3,
      src: TheShoeCompany,
      live: "https://theshoecompany-subhadip.netlify.app",
      code: "https://github.com/subhadip31/The-Shoe-Company-Website",
      title: "The Shoe Company",
    },
    {
      id: 4,
      src: BillSplitter,
      live: "https://billsplitter-subhadip.netlify.app",
      code: "https://github.com/subhadip31/Bill-Splitter",
      title: "Bill Splitter",
    },
    {
      id: 5,
      src: CountriesApp,
      live: "https://countries-trivia-web-app.netlify.app",
      code: "https://github.com/subhadip31/Countries-Trivia-App",
      title: "Countries Trivia App",
    },
    {
      id: 6,
      src: BiteBuddy,
      live: "https://chef-bite-buddy.netlify.app",
      code: "https://github.com/subhadip31/Bite-Buddy",
      title: "Chef Bite Buddy App",
    },
    {
      id: 7,
      src: TripGo,
      live: "https://tripgo-subhadip.netlify.app",
      code: "https://github.com/subhadip31/TripGo-Website",
      title: "Trip Go",
    },
    {
      id: 8,
      src: RockPaperScissors,
      live: "https://rockpaperscissors-subhadip.netlify.app",
      code: "https://github.com/subhadip31/Rock-Paper-Scissors",
      title: "Rock Paper Scissors",
    },
    {
      id: 9,
      src: TicTacToe,
      live: "https://tictactoe-subhadip.netlify.app",
      code: "https://github.com/subhadip31/Tic-Tac-Toe",
      title: "Tic Tac Toe",
    },
    {
      id: 10,
      src: ReactClock,
      live: "https://react-clock-subhadip.netlify.app",
      code: "https://github.com/subhadip31/React-Clock",
      title: "React Clock",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, title, live, code }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt={title}
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={code} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
