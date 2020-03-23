import express from 'express'
import { v4 as uuidv4 } from 'uuid';

const server = express();

const topchart = [{
        id: uuidv4(),
        place: 1,
        singer: 'Dua Lipa',
        song: 'Physical',
        year: '2020',
        isNew: true,
    },
    {
        id: uuidv4(),
        place: 2,
        singer: 'Ally Broke',
        song: 'No Good',
        year: '2020',
        isNew: true,
    },
    {
        id: uuidv4(),
        place: 3,
        singer: 'Tove Lo',
        song: 'True Disaster',
        year: '2016',
        isNew: false,
    },
    {
        id: uuidv4(),
        place: 4,
        singer: 'Eric Prydz feat. Rob Swire',
        song: 'Breathe',
        year: '2016',
        isNew: false,
    },
    {
        id: uuidv4(),
        place: 5,
        singer: 'Zedd feat. Matthew Koma',
        song: 'Spectrum',
        year: '2012',
        isNew: false,
    },
    {
        id: uuidv4(),
        place: 6,
        singer: 'Little Mix feat. Nicki Minaj',
        song: 'Woman Like Me',
        year: '2018',
        isNew: false,
    },
    {
        id: uuidv4(),
        place: 7,
        singer: 'OneRepublic',
        song: 'Kids',
        year: '2016',
        isNew: false,
    },
    {
        id: uuidv4(),
        place: 8,
        singer: 'The Chainsmokers feat. Emily Warren',
        song: 'Side Effects',
        year: '2018',
        isNew: false,
    },
    {
        id: uuidv4(),
        place: 9,
        singer: 'Eva Simons',
        song: 'Avalon',
        year: '2017',
        isNew: false,
    },
    {
        id: uuidv4(),
        place: 10,
        singer: 'Calvin Harris, Dua Lipa',
        song: 'One Kiss',
        year: '2017',
        isNew: false,
    },
];

server.get('/topchart', (req, res) => {
    try {
        res.send(topchart)
    }
    catch (error) {
        console.error(error);
    }

});

server.listen(3000, () => console.log('API started!'));