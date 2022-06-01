import { Pie } from 'react-chartjs-2'
import GuardedPage from './GuardedPage';
import { Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Title from '../components/Title';
import { useEffect ,useState } from 'react';
import { getAllUsers } from '../backendUtils';

const useStyles = makeStyles( (theme)=> ( {
  graphContainer:{
  marginTop: theme.spacing(2),
  width:"100%",
  [theme.breakpoints.up("md")]:{
    width:"600px",
    height:"600px"
  }
}
}));



function makeData(data){

  return  {
    labels: ['0-5', '6-10', '10+'],
    datasets: [
      {
        label: 'Score Ranges',
        data ,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
           'rgba(255, 206, 86, 0.5)',
         ' rgba(0, 230, 64, 0.5)',
         ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          ' rgba(0, 230, 64, 1)',

        ],
        borderWidth: 1,
      },
    ],
  };

}



export default function StatsPage(props) {

  const [isLoading,setIsLoading] = useState(false);
  const [hasError,setHasError] = useState(false);
  const [graphData,setGraphData] = useState({});

  const classes = useStyles();

  console.log(!isLoading);
  async function loadUserGraph(){
    const response = await getAllUsers();
    const allStudents = response.data;
    let highestScores = allStudents.map((student)=> Math.max(...student.scores));
    const data = [0,0,0];
    highestScores.forEach((score)=> {
      console.log(score);
      switch (true){
        case score >= 0 && score <=5:
          data[0]++;
          break;
        case score >= 6  &&  score <= 10:
          data[1]++;
          break;
        case score > 10:
          data[2]++;
          break;
        default:
      }
    });
    setGraphData(makeData(data));
  }


  useEffect(()=>{
    loadUserGraph();
  },[])
  
  
  return (<GuardedPage>
    <Title prefix="Kids' Progress using " gutterBottom/>
    <div className={classes.graphContainer}>
   {  !isLoading && !hasError && <Pie data={graphData}></Pie>}
    </div>
  </GuardedPage>)
}