export const formatMarketingTerm = (term) => {
    const dictionary = {
        'prospect': 'client potentiel',
        'lead': 'contact qualifié',
        'roi': 'retour sur investissement',
        'funnel': 'tunnel de conversion'
    };
    return dictionary[term.toLowerCase()] || term;
};

export const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Bonjour l'équipe GHM ! Prêt pour une session matinale ?";
    if (hours < 18) return "Bon après-midi ! On continue à dominer le marché ?";
    return "Bonsoir ! Une petite session avant de clore la journée ?";
};
