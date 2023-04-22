import axios from "axios";
import  { useState } from "react";
import { useNavigate } from "react";

        // greenscore.name,
        // greenscore.date,
        // greenscore.person,
        // greenscore.place,
        // greenscore.thing,
        // greenscore.mood,
        // greenscore.is_favorite,
        // greenscore.notes,
        // greenscore.photo_url,
      
const API = process.env.REACT_APP_BASE_URL;

export default function Create() {
    const [GreenScore, setGreenScore] = useState({
        name: "",
        date: "",
        person: "",
        place: "",
        thing: "",
        mood: "",
        is_favorite: "",
        notes: "",
        photo_url: "",
    })

    
}