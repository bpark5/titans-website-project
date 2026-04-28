export default function handler(request, response) {
  response.status(200).json([
    {
        title: "Titans vs Lions",
        date: "2024-10-05",
        time: "7:00 PM",
        location: "Titans Stadium",
    },
    {
        title: "Titans vs Bears",
        date: "2024-10-12",
        time: "7:00 PM",
        location: "Titans Stadium",
    },
    {
        title: "Titans vs Trees",
        date: "2024-10-19",
        time: "7:00 PM",
        location: "Tree Field",
    },
    {
        title: "Titans vs Sharks",
        date: "2024-10-26",
        time: "7:00 PM",
        location: "Shark Arena",
    }
  ]);
}