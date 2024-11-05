const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */

    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })
    

    test('can create a Band', async () => {
        const band = await Band.create({ name: 'Jonas Brothers', genre: 'Rock' });

        expect(band.name).toBe('Jonas Brothers');
        expect(band.genre).toBe('Rock');
        //expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const musician = await Musician.create({ name: 'Polo G', instrument: 'Piano' });
        expect(musician.name).toBe('Polo G');
        expect(musician.instrument).toBe('Piano');  
    })
    test('can create a Song', async () => {
        // TODO - test creating a musician
        const song = await Song.create({ title: 'Rapstar', length: 3, year: 2021 });
        expect(song.title).toBe('Rapstar');
        expect(song.length).toBe(3);  
        expect(song.year).toBe(2021);
    })

    test('can update a Band', async () => {
    
        const band = await Band.create({ name: 'Jonas Brothers', genre: 'Rock' });
        const updatedBand = await band.update({ genre: 'Pop' });
        expect(band.genre).toBe('Pop');
    })

    test('can update a Musician', async () => {
        const musician = await Musician.create({ name: 'Polo G', instrument: 'Piano' });
        const updatedMusician = await musician.update({ instrument: 'Guitar' });
        expect(musician.instrument).toBe('Guitar');
    })

    test('can delete a Band', async () => {
        const band = await Band.create({ name: 'Jonas Brothers', genre: 'Rock' });
        console.log(Band.length);
        await band.destroy();
        
        expect(Band.length).toBe(0);
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })
})