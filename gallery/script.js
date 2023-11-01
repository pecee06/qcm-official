let url = "https://picsum.photos/800/450?random=";

for (let i=0; i<9; i++){
    $(".images").append(`
        <img src="${url}+${i+1}">
    `);
}