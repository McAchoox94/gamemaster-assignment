const assignGamemasters = (rooms, gamemasters) => {
    // Liste des sessions qui vont être retournées
    const sessions = [];
    // Copie des gamemasters disponibles
    let availableGamemasters = gamemasters.slice();
    
    // Pour chaque salle, nous allons chercher un gamemaster formé
    rooms.forEach(room => {
        const gamemaster = availableGamemasters.find(gm => gm.trained_rooms.includes(room.id));
        if (gamemaster) {
            // Si un gamemaster est trouvé, on ajoute la session
            sessions.push({ room: room, gamemaster: gamemaster });
            // On retire le gamemaster de la liste des disponibles
            availableGamemasters = availableGamemasters.filter(gm => gm.id !== gamemaster.id);
        } else {
            // Si aucun gamemaster n'est trouvé, on lance une erreur
            throw new Error('Aucune solution possible');
        }
    });
    
    return sessions;
};

module.exports = { assignGamemasters };
