export default function handler(request, res) {
  res.json({
    "items": [
        {
            "id": "1",
            "title": "Schedule",
            "slug": "schedule",
            "children": [
                { 
                    "id": "1-1", 
                    "title": "Schedule Page", 
                    "slug": "schedule" 
                },
                { 
                    "id": "1-2", 
                    "title": "Games", 
                    "slug": "schedule" 
                },
                { 
                    "id": "1-3", 
                    "title": "Practice", 
                    "slug": "schedule" 
                }
            ]
        },
        {
            "id": "2",
            "title": "Roster",
            "slug": "roster",
            "children": [
                { 
                    "id": "2-1", 
                    "title": "Roster Page", 
                    "slug": "roster" 
                },
                { 
                    "id": "2-2", 
                    "title": "Players", 
                    "slug": "roster" 
                },
                { 
                    "id": "2-3", 
                    "title": "Coaches", 
                    "slug": "roster" 
                }
            ]
        },
        {
            "id": "3",
            "title": "About",
            "slug": "about",
            "children": [
                { 
                    "id": "3-1", 
                    "title": "About Page", 
                    "slug": "about" 
                },
                { 
                    "id": "3-2",
                    "title": "Contact", 
                    "slug": "contact" 
                }
            ]
        }
    ]

  });
}