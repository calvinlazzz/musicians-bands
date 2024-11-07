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
        await sequelize.sync({ force: true });

        const band = await Band.create({ name: 'Jonas Brothers', genre: 'Rock' });

        expect(band.name).toBe('Jonas Brothers');
        expect(band.genre).toBe('Rock');
        //expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can create a Musician', async () => {
        await sequelize.sync({ force: true });

        // TODO - test creating a musician
        const musician = await Musician.create({ name: 'Polo G', instrument: 'Piano' });
        expect(musician.name).toBe('Polo G');
        expect(musician.instrument).toBe('Piano');  
    })
    test('can create a Song', async () => {
        await sequelize.sync({ force: true });
        // TODO - test creating a musician
        const song = await Song.create({ title: 'Rapstar', length: 3, year: 2021 });
        expect(song.title).toBe('Rapstar');
        expect(song.length).toBe(3);  
        expect(song.year).toBe(2021);
    })

    test('can update a Band', async () => {
        await sequelize.sync({ force: true });
        const band = await Band.create({ name: 'Jonas Brothers', genre: 'Rock' });
        const updatedBand = await band.update({ genre: 'Pop' });
        expect(band.genre).toBe('Pop');
    })

    test('can update a Musician', async () => {
        await sequelize.sync({ force: true });

        const musician = await Musician.create({ name: 'Polo G', instrument: 'Piano' });
        const updatedMusician = await musician.update({ instrument: 'Guitar' });
        expect(musician.instrument).toBe('Guitar');
    })
    test('can update a Song', async () => {
        await sequelize.sync({ force: true });

        const song = await Song.create({ title: 'Rapstar', length: 3, year: 2021 });
        const updatedSong = await song.update({ length: 4 });
        expect(song.length).toBe(4);
    })

    test('can delete a Band', async () => {
        await sequelize.sync({ force: true });

        const band = await Band.create({ name: 'Jonas Brothers', genre: 'Rock' });
        console.log(Band.length);
        await band.destroy();
        const foundBand = await Band.findByPk(band.id);
        expect(foundBand).toBeNull();
    })

    test('can delete a Musician', async () => {
        await sequelize.sync({ force: true });

        const musician = await Musician.create({ name: 'Polo G', instrument: 'Piano' });
        await musician.destroy();
        const foundMusician = await Musician.findByPk(musician.id);
        expect(foundMusician).toBeNull();
    })
    test('can delete a Song', async () => {
        await sequelize.sync({ force: true });

        const song = await Song.create({ title: 'Rapstar', length: 3, year: 2021 });
        await song.destroy();
        const foundSong = await Song.findByPk(song.id);
        expect(foundSong).toBeNull();
    })
    test('Musicians many to one Band', async () => {
        await sequelize.sync({ force: true });

        // TODO - test the association between musicians and bands
        const band = await Band.create({ name: 'Jonas Brothers', genre: 'Rock' });
        const musician = await Musician.create({ name: 'Polo G', instrument: 'Piano'});
        const musician2 = await Musician.create({ name: 'Lil Baby', instrument: 'Guitar'});
        await band.addMusician(musician);
        await band.addMusician(musician2);
        const musicians = await band.getMusicians();
        expect(musicians.length).toBe(2);
    })
    test('Songs many to many Bands', async () => {
        await sequelize.sync({ force: true });

        // TODO - test the association between songs and bands
        const band = await Band.create({ name: 'Jonas Brothers', genre: 'Rock' });
        const band2 = await Band.create({ name: 'Migos', genre: 'Rap' });
        const song = await Song.create({ title: 'Rapstar', length: 3, year: 2021 });
        const song2 = await Song.create({ title: 'Rapstar2', length: 4, year: 2022 });
        await band.addSong(song);
        await band.addSong(song2);
        await band2.addSong(song);
        await band2.addSong(song2);
        
        const songs = await band.getSongs();
        const songs2 = await band2.getSongs();
        expect(songs.length).toBe(2);
        expect(songs2.length).toBe(2);
    
    })
    
})