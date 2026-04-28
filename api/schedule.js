export default function handler(request, res) {
  res.json({
    "games": [
        {
        id: "1",
        title: "Titans vs Lions",
        date: "2026-05-05",
        time: "7:00 PM",
        location: "Titans Stadium",
        },
        {
            id: "2",
            title: "Titans vs Bears",
            date: "2026-04-29",
            time: "7:00 PM",
            location: "Titans Stadium",
        },
        {
            id: "3",
            title: "Titans vs Trees",
            date: "2026-04-19",
            time: "7:00 PM",
            location: "Tree Field",
        },
        {
            id: "4",
            title: "Titans vs Sharks",
            date: "2026-05-01",
            time: "7:00 PM",
            location: "Shark Arena",
        }
    ]     
    });
}