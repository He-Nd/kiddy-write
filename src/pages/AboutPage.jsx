import Page from './Page';
import { Typography,Box } from '@material-ui/core'
import Title from '../components/Title'



export default function AboutPage() {
    return (
        <Page>
            <Box padding={1}>
            <Box mb={2}>
            <Title prefix="About " gutterBottom/>
            </Box>

            <Typography paragraph align="justify">
                Technology has changed our lives in many aspects, if not all. One of the biggest areas where our applying approach has changed is our learning approach. We are learning in a very different way than how the old generation used to.
                One of the things that has changed almost completely in practice is our methods to communicate and deliver our thoughts in writing, nowadays we mostly use keyboards to write everything starting from our daily communication texts till preparing official reports and documents.
                Still being able to write on a paper using a pencil physically is considered one of the most important skills that a successful individual must have since we still require using actual physical writing in many ways in our daily life and in professional work aspects such as using it in teaching and authentication of signatures.

            </Typography>

            <Typography paragraph align="justify">
            Kiddy Write, is a project meant to improve kids writing skills with less supervision possible from adults. Its aim to simulate the physical learning process by holding stylus and parts.
                The system is following the gamification concept of learning since it had proven its effectiveness overall the learning outcome especially with children.
                The system is using different tools and technologies to provide the feature of evaluating the input by children and providing the proper feedback.
                Information will display in the stats page to get the ability to evaluate the general performance of the prayers.
            </Typography>
            </Box>
        </Page>
    )
}