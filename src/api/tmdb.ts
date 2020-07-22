import axios from 'axios';

export default axios.create({    
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTNkZjM5MDQxYWNiMmU1NTgyYTg5ODg0ZTA2YzIzYSIsInN1YiI6IjVmMGM0NGRmMTNhMzIwMDAzNTdlYTAxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y0XQaDHl23RZrBSUUoc-zJygRsJQqL2S_EaLDl2JgGs'
    }
});