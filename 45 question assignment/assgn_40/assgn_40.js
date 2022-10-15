const make_album = (artist_name, album_title, number_of_tracks = 0) => {
    if (number_of_tracks === 0) {
        return {
            artist_name: artist_name,
            album_title: album_title
        };
    }
    else {
        return {
            artist_name: artist_name,
            album_title: album_title,
            number_of_tracks: number_of_tracks
        };
    }
}
const album_1 = make_album("Atif Aslam", "Pehli Dafa");
const album_2 = make_album("Ali Zafar", "Jhoom");
const album_3 = make_album("Ali Zafar", "Channo");
console.log(album_1);
console.log(album_2);
console.log(album_3);
const album_4 = make_album("Ali Zafar", "Channo", 10);
console.log(album_4);