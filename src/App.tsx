import Grid from "@mui/material/Grid";
import TopAppBar from "./components/TopAppBar";
import Filter from "./components/Filter";
import MentorList from "./components/MentorList";
import { Typography } from "@mui/material";

const mentorList = [
  {
    id: 1,
    name: "Jane Smith",
    experience: 5,
    areaOfExpertise: "Data Science, Python, and Machine Learning",
    rating: 5,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, metus quis blandit mattis, ligula augue molestie lectus, id volutpat sem diam nec arcu. Sed vel tincidunt lacus, a sodales nisi. Vestibulum ac enim felis.",
    imageUrl: "/src/images/person2.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    experience: 8,
    areaOfExpertise: "Web Development, JavaScript, React",
    rating: 4,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, metus quis blandit mattis, ligula augue molestie lectus, id volutpat sem diam nec arcu. Sed vel tincidunt lacus, a sodales nisi. Vestibulum ac enim felis.",
    imageUrl: "/src/images/person1.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    experience: 3,
    areaOfExpertise: "UI/UX Design, Figma, Adobe XD",
    rating: 3,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, metus quis blandit mattis, ligula augue molestie lectus, id volutpat sem diam nec arcu. Sed vel tincidunt lacus, a sodales nisi. Vestibulum ac enim felis..",
    imageUrl: "/src/images/person4.jpg",
  },
  {
    id: 4,
    name: "Mark Brown",
    experience: 10,
    areaOfExpertise: "Cloud Computing, AWS, Azure",
    rating: 5,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, metus quis blandit mattis, ligula augue molestie lectus, id volutpat sem diam nec arcu. Sed vel tincidunt lacus, a sodales nisi. Vestibulum ac enim felis.",
    imageUrl: "/src/images/person3.jpg",
  },
  {
    id: 5,
    name: "Emily White",
    experience: 2,
    areaOfExpertise: "Graphic Design, Illustrator, Photoshop",
    rating: 4,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, metus quis blandit mattis, ligula augue molestie lectus, id volutpat sem diam nec arcu. Sed vel tincidunt lacus, a sodales nisi. Vestibulum ac enim felis.",
    imageUrl: "/src/images/person2.jpg",
  },
  {
    id: 6,
    name: "David Green",
    experience: 7,
    areaOfExpertise: "Cybersecurity, Network Security, Ethical Hacking",
    rating: 3,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, metus quis blandit mattis, ligula augue molestie lectus, id volutpat sem diam nec arcu. Sed vel tincidunt lacus, a sodales nisi. Vestibulum ac enim felis.",
    imageUrl: "/src/images/person1.jpg",
  },
  {
    id: 7,
    name: "Sophia Hill",
    experience: 6,
    areaOfExpertise: "Mobile App Development, Flutter, React Native",
    rating: 3,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, metus quis blandit mattis, ligula augue molestie lectus, id volutpat sem diam nec arcu. Sed vel tincidunt lacus, a sodales nisi. Vestibulum ac enim felis.",
    imageUrl: "/src/images/person2.jpg",
  },
  {
    id: 8,
    name: "Ethan Moore",
    experience: 9,
    areaOfExpertise: "Big Data, Hadoop, Spark",
    rating: 5,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, metus quis blandit mattis, ligula augue molestie lectus, id volutpat sem diam nec arcu. Sed vel tincidunt lacus, a sodales nisi. Vestibulum ac enim felis.",
    imageUrl: "/src/images/person1.jpg",
  },
  {
    id: 9,
    name: "Isabella Taylor",
    experience: 4,
    areaOfExpertise: "SEO, Digital Marketing, Content Writing",
    rating: 4,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, metus quis blandit mattis, ligula augue molestie lectus, id volutpat sem diam nec arcu. Sed vel tincidunt lacus, a sodales nisi. Vestibulum ac enim felis.",
    imageUrl: "/src/images/person4.jpg",
  },
  {
    id: 10,
    name: "Michael Davis",
    experience: 11,
    areaOfExpertise: "Project Management, Agile, Scrum",
    rating: 5,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, metus quis blandit mattis, ligula augue molestie lectus, id volutpat sem diam nec arcu. Sed vel tincidunt lacus, a sodales nisi. Vestibulum ac enim felis.",
    imageUrl: "/src/images/person3.jpg",
  },
];

const App: React.FC = () => {
  return (
    <>
      <Grid container className="flex-section" spacing={6}>
        <Grid item xs={12} md={12}>
          <TopAppBar />
        </Grid>
        <Grid item xs={10} md={4}>
          <Filter />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h3">Find a Mentor</Typography>
          <MentorList mentors={mentorList} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
