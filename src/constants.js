let constants = {
    apiKey: 'e2967cfdb26e1c76732a0058e8ac81ee',
    pageTitlePostfix: ' — ' + document.title,
    listTypes: [{
            title: 'Now Playing Movies',
            shortTitle: 'Now Playing',
            query: 'now_playing',
            type: 'collection',
            isCategory: true
        },
        {
            title: 'Upcoming Movies',
            shortTitle: 'Upcoming',
            query: 'upcoming',
            type: 'collection',
            isCategory: true
        }
    ],
    categories: {},
};

constants.listTypes.forEach(function(listType) {
    constants.categories[listType.query] = listType.title;
});


export default constants;