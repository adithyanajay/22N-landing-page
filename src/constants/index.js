import { amsterdam, calendar, rotterdam, show_img, show_img_2, weekend } from "../assets";

export const categories = [
    {
        img: amsterdam,
        text: "Amsterdam"
    },
    {
        img: rotterdam,
        text: "Rotterdam"
    },
]

export const calendar_info = [
    {
        img: calendar,
        text: "Vandaag"
    },

    {
        img: weekend,
        text: "Dit weekend"
    },

    {
        img: calendar,
        text: "Kies datum"
    },
]

const Donderdag = [
    {
        img: show_img,
        name: "Charlee",
        time: "23:00",
        place: "Lovelee, Amsterdam",
        age: "18+",
        ticket: "Gastenlijst"
    },
    {
        img: show_img,
        name: "Charlee",
        time: "23:00",
        place: "Lovelee, Amsterdam",
        age: "18+",
        ticket: "Gastenlijst"
    },
    {
        img: show_img,
        name: "Charlee",
        time: "23:00",
        place: "Lovelee, Amsterdam",
        age: "18+",
        ticket: "Gastenlijst"
    },
    {
        img: show_img,
        name: "Charlee",
        time: "23:00",
        place: "Lovelee, Amsterdam",
        age: "18+",
        ticket: "Gastenlijst"
    },
    {
        img: show_img,
        name: "Charlee",
        time: "23:00",
        place: "Lovelee, Amsterdam",
        age: "18+",
        ticket: "Gastenlijst"
    },{
        img: show_img,
        name: "Charlee",
        time: "23:00",
        place: "Lovelee, Amsterdam",
        age: "18+",
        ticket: "Gastenlijst"
    },
]

const Vrijdag = [
    {
        img: show_img_2,
        name: "Vrijdag",
        time: "23:00",
        place: "Lovelee, Amsterdam",
        age: "18+",
        ticket: "Gastenlijst"
    }
]

const shows = [
    {
    show_name: "Donderdag",
    show_date: "8 June",
    shows : Donderdag
    },

    {
        show_name: "Vrijdag",
        show_date : "5 July",
        shows: Vrijdag
    }
]

export default shows;