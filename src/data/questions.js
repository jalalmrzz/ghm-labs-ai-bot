export const questions = [
    {
        id: 1,
        category: "Communication Client",
        scenario: "Un client vous appelle furieux car sa campagne n'a généré que 10 leads ce mois-ci, alors qu'il en attendait 50. Que faites-vous ?",
        options: [
            { id: "a", text: "Je m'excuse platement et je lui offre un remboursement partiel immédiatement." },
            { id: "b", text: "Je reste calme, je l'écoute, puis je propose d'analyser ensemble la qualité des leads plutôt que la quantité." },
            { id: "c", text: "Je lui explique que c'est la faute de l'algorithme de Facebook et que je n'y peux rien." },
            { id: "d", text: "Je ne réponds pas au téléphone et j'attends le lendemain pour envoyer un email technique." }
        ],
        correctAnswer: "b",
        explanation: "L'empathie et l'écoute sont cruciales. En orientant la discussion vers le ROI (qualité des leads), vous valorisez votre travail et calmez le jeu avec des données concrètes."
    },
    {
        id: 2,
        category: "Négociation",
        scenario: "Un prospect vous dit : 'Votre devis est trop cher, mon cousin peut me faire le site pour 200€'. Quelle est votre réponse ?",
        options: [
            { id: "a", text: "Je m'aligne sur le prix du cousin pour ne pas perdre le client." },
            { id: "b", text: "Je lui dis que son cousin est un amateur et que son site sera nul." },
            { id: "c", text: "J'explique que mon tarif inclut une stratégie de conversion et un accompagnement pro que le cousin n'offre pas." },
            { id: "d", text: "Je lui souhaite bonne chance avec son cousin et je raccroche." }
        ],
        correctAnswer: "c",
        explanation: "Vendez la valeur, pas le prix. Montrez ce que le client perd en choisissant l'option 'bon marché' (manque de stratégie, conversion faible, pas de support)."
    },
    {
        id: 3,
        category: "Gestion de Crise",
        scenario: "Vous avez fait une faute d'orthographe dans le nom du client sur une publicité qui a déjà dépensé 500€. Le client s'en aperçoit.",
        options: [
            { id: "a", text: "Je nie avoir fait l'erreur et je dis que c'est un bug d'affichage." },
            { id: "b", text: "J'arrête tout de suite la pub, j'assume l'erreur auprès du client et je propose de compenser les 500€." },
            { id: "c", text: "Je corrige discrètement et j'espère qu'il ne s'en rendra pas compte." },
            { id: "d", text: "Je lui dis que l'orthographe n'est pas importante tant que les gens cliquent." }
        ],
        correctAnswer: "b",
        explanation: "L'honnêteté renforce la confiance à long terme. Assumer une erreur et proposer une solution (compensation ou geste commercial) est la marque d'un professionnel."
    },
    {
        id: 4,
        category: "Présentation de Résultats",
        scenario: "Lors d'un rapport mensuel, le client ne comprend pas le terme 'CTR' ou 'Taux de rebond'. Que faites-vous ?",
        options: [
            { id: "a", text: "Je continue d'utiliser le jargon car ça fait expert." },
            { id: "b", text: "Je lui donne une définition dictionnaire complexe." },
            { id: "c", text: "Je traduis en langage business : 'le CTR, c'est l'intérêt que les gens portent à votre message'." },
            { id: "d", text: "Je lui dis qu'il n'a pas besoin de comprendre ces détails techniques." }
        ],
        correctAnswer: "c",
        explanation: "Un client qui comprend vos rapports est un client qui renouvellera son contrat. Simplifiez toujours la donnée pour la rendre actionnable pour son business."
    },
    {
        id: 5,
        category: "Vente",
        scenario: "Un client potentiel hésite à signer le contrat car il a peur de ne pas avoir de résultats. Quelle est la meilleure approche ?",
        options: [
            { id: "a", text: "Je lui garantis par écrit qu'il aura 100 ventes par mois (même si c'est incertain)." },
            { id: "b", text: "Je lui présente des études de cas similaires et je fixe des objectifs réalistes par paliers." },
            { id: "c", text: "Je lui mets la pression en disant que l'offre expire dans une heure." },
            { id: "d", text: "Je lui dis que le marketing est une loterie et qu'on verra bien." }
        ],
        correctAnswer: "b",
        explanation: "La preuve sociale (études de cas) et la transparence sur les objectifs réduisent l'anxiété d'achat sans faire de promesses mensongères dangereuses."
    },
    {
        id: 6,
        category: "Communication Client",
        scenario: "Un client vous envoie un message WhatsApp à 22h un dimanche pour une modification 'urgente' sur sa campagne. Que faites-vous ?",
        options: [
            { id: "a", text: "Je réponds immédiatement et je fais la modification pour montrer que je suis dévoué." },
            { id: "b", text: "Je ne réponds pas et je traite la demande le lundi matin à l'ouverture du bureau." },
            { id: "c", text: "Je réponds que je ne travaille pas le dimanche et qu'il est impoli." },
            { id: "d", text: "Je prévois un message automatique de courtoisie et je traite le lundi matin." }
        ],
        correctAnswer: "d",
        explanation: "Fixer des limites est essentiel pour la survie de votre agence. Un professionnel éduque ses clients sur ses horaires dès le début du contrat."
    },
    {
        id: 7,
        category: "Vente",
        scenario: "Un prospect vous demande : 'Pouvez-vous me garantir un retour sur investissement (ROI) de 500% ?' Que répondez-vous ?",
        options: [
            { id: "a", text: "Oui, je le garantis sans problème pour signer le contrat." },
            { id: "b", text: "Non, c'est impossible, personne ne peut faire ça." },
            { id: "c", text: "Je ne garantis pas de chiffre précis car trop de facteurs externes jouent, mais je garantis une optimisation constante basée sur vos KPIs." },
            { id: "d", text: "Je lui dis que cela dépend uniquement de son produit et pas de mon travail." }
        ],
        correctAnswer: "c",
        explanation: "Ne promettez jamais ce que vous ne contrôlez pas à 100%. Le marketing n'est pas une science infuse; la transparence sur les risques vous donne de la crédibilité."
    },
    {
        id: 8,
        category: "Prix",
        scenario: "Un client actuel vous demande une prestation supplémentaire qui n'est pas dans le contrat initial, mais qui est 'rapide à faire'.",
        options: [
            { id: "a", text: "Je le fais gratuitement pour lui faire plaisir." },
            { id: "b", text: "Je lui explique que c'est hors contrat et je lui envoie un avenant de prix." },
            { id: "c", text: "Je le fais une fois, mais je l'avertis que la prochaine fois ce sera payant." },
            { id: "d", text: "Je refuse catégoriquement sans explication." }
        ],
        correctAnswer: "b",
        explanation: "Le 'Scope Creep' (dérapage du périmètre) tue la rentabilité. Tout travail mérite salaire, même s'il est rapide. L'avenant protège votre temps."
    },
    {
        id: 9,
        category: "Gestion de Projets",
        scenario: "Vous avez du retard sur la livraison d'un projet de 3 jours car vous avez eu une grippe. Le client attend.",
        options: [
            { id: "a", text: "Je ne dis rien et je livre quand c'est prêt." },
            { id: "b", text: "J'invente une excuse technique bidon (panne de serveur)." },
            { id: "c", text: "Je préviens le client dès le premier jour de maladie, je m'excuse et je donne une nouvelle date ferme." },
            { id: "d", text: "Je travaille en étant malade même si la qualité est médiocre." }
        ],
        correctAnswer: "c",
        explanation: "La communication proactive désamorce 90% des conflits. Prévenir tôt montre que vous respectez le temps de votre client."
    },
    {
        id: 10,
        category: "Présentation de Résultats",
        scenario: "Les résultats d'un mois sont mauvais malgré tous vos efforts. Comment préparez-vous la réunion ?",
        options: [
            { id: "a", text: "J'essaie de cacher les mauvais chiffres dans des graphiques complexes." },
            { id: "b", text: "J'annule la réunion en espérant que ça s'améliore le mois prochain." },
            { id: "c", text: "Je présente honnêtement les chiffres, j'identifie les causes possibles et je propose un plan d'action correctif." },
            { id: "d", text: "Je rejette la faute sur le site web du client qui est trop vieux." }
        ],
        correctAnswer: "c",
        explanation: "Un client paie pour votre expertise, pas seulement pour des bons chiffres. Votre capacité à rebondir après un échec définit votre valeur."
    },
    {
        id: 11,
        category: "Vente",
        scenario: "Lors d'un premier appel, le prospect parle pendant 20 minutes de ses problèmes sans vous laisser placer un mot sur vos services.",
        options: [
            { id: "a", text: "Je l'interromps pour enfin présenter mon agence." },
            { id: "b", text: "Je l'écoute attentivement, je prends des notes, et je reformule ses besoins avant de proposer ma solution." },
            { id: "c", text: "Je raccroche car il parle trop." },
            { id: "d", text: "Je commence à faire un devis dans ma tête sans poser de questions supplémentaires." }
        ],
        correctAnswer: "b",
        explanation: "La phase d'écoute est la plus importante en vente. Si le prospect parle beaucoup, il vous donne toutes les clés pour lui vendre la solution parfaite."
    },
    {
        id: 12,
        category: "Communication Client",
        scenario: "Un client conteste une facture pourtant conforme au devis signé. Quelle est votre réaction ?",
        options: [
            { id: "a", text: "Je menace immédiatement de poursuites judiciaires." },
            { id: "b", text: "Je renvoie le devis signé calmement et je demande quel point précis pose problème." },
            { id: "c", text: "Je lui propose une remise de 50% pour clore le débat." },
            { id: "d", text: "Je ne dis rien et je suspends tous les services en cours." }
        ],
        correctAnswer: "b",
        explanation: "Le rappel des faits et du contrat est la première étape. Souvent, il s'agit d'une simple incompréhension qui se règle par le dialogue."
    },
    {
        id: 13,
        category: "Négociation",
        scenario: "Un client veut diviser votre budget publicitaire par deux mais veut garder les mêmes objectifs de ventes.",
        options: [
            { id: "a", text: "Je dis 'Oui Chef' et je fais de mon mieux." },
            { id: "b", text: "J'explique mathématiquement que moins d'investissement = moins de portée, et je réajuste les objectifs de vente proportionnellement." },
            { id: "c", text: "Je lui dis qu'il est radin." },
            { id: "d", text: "J'accepte et je travaille deux fois plus sans le dire." }
        ],
        correctAnswer: "b",
        explanation: "Le marketing est une équation. Vous devez éduquer le client sur la relation entre budget et résultats pour éviter toute déception future."
    },
    {
        id: 14,
        category: "Gestion de Projets",
        scenario: "Vous réalisez que le projet va prendre deux fois plus de temps que prévu à cause d'une erreur d'estimation de votre part au début.",
        options: [
            { id: "a", text: "Je demande au client de payer le double." },
            { id: "b", text: "Je bâcle le travail pour finir à l'heure." },
            { id: "c", text: "J'assume mon erreur, je finis le projet avec la qualité promise, et j'apprends pour le devis suivant." },
            { id: "d", text: "J'abandonne le projet." }
        ],
        correctAnswer: "c",
        explanation: "Votre réputation vaut plus que quelques heures de travail non facturées. Une erreur d'estimation est votre coût d'apprentissage."
    },
    {
        id: 15,
        category: "Vente",
        scenario: "Un client vous dit : 'Je dois en parler à mon associé' à la fin de la présentation. Que faites-vous ?",
        options: [
            { id: "a", text: "Je lui dis : 'D'accord, rappelez-moi quand c'est fait'." },
            { id: "b", text: "Je demande : 'Quelles informations votre associé aura-t-il besoin pour prendre sa décision ? Puis-je lui envoyer un résumé ?'." },
            { id: "c", text: "Je lui dis que son associé n'y comprend rien de toute façon." },
            { id: "d", text: "Je propose une réduction s'il signe sans son associé." }
        ],
        correctAnswer: "b",
        explanation: "Accompagnez le processus de décision. En aidant votre interlocuteur à convaincre son associé, vous maximisez vos chances de signature."
    },
    {
        id: 16,
        category: "Communication Client",
        scenario: "Le fils du client (qui a 15 ans) donne son avis sur votre stratégie SEO et le client l'écoute plus que vous. Que faites-vous ?",
        options: [
            { id: "a", text: "Je me moque de l'adolescent." },
            { id: "b", text: "Je démissionne." },
            { id: "c", text: "Je reste professionnel et je montre des données chiffrées qui prouvent pourquoi ma stratégie est la bonne." },
            { id: "d", text: "Je fais ce que le fils dit pour ne pas contrarier le client." }
        ],
        correctAnswer: "c",
        explanation: "Contre l'émotionnel (l'avis d'un proche), apportez du rationnel (les données). Les chiffres ne mentent pas et protègent votre expertise."
    },
    {
        id: 17,
        category: "Prix",
        scenario: "Un client fidèle vous demande une réduction car il traverse une période difficile financièrement.",
        options: [
            { id: "a", text: "Je refuse par principe." },
            { id: "b", text: "J'accepte sans condition." },
            { id: "c", text: "Je propose de réduire temporairement l'étendue des services (et donc le prix) pour l'aider sans dévaluer mon travail." },
            { id: "d", text: "Je lui propose d'arrêter de travailler ensemble." }
        ],
        correctAnswer: "c",
        explanation: "C'est une solution gagnant-gagnant. Vous aidez le client tout en maintenant la valeur de votre taux horaire en réduisant le volume de travail."
    },
    {
        id: 18,
        category: "Gestion de Crise",
        scenario: "Une campagne publicitaire vient de dépenser 1000€ par erreur à cause d'un mauvais réglage de budget de votre part.",
        options: [
            { id: "a", text: "Je facture les 1000€ au client sans rien dire." },
            { id: "b", text: "Je contacte le client, j'explique l'erreur et je déduis ces 1000€ de ma prestation." },
            { id: "c", text: "Je supprime les accès du client pour qu'il ne voie pas l'erreur." },
            { id: "d", text: "C'est de la faute de la plateforme, je ne fais rien." }
        ],
        correctAnswer: "b",
        explanation: "L'intégrité financière est le socle de la relation agence-client. Remboursez ou déduisez toujours les erreurs de budget dont vous êtes responsable."
    },
    {
        id: 19,
        category: "Vente",
        scenario: "Un prospect vous demande vos références mais vous venez de lancer votre activité et vous n'en avez pas encore.",
        options: [
            { id: "a", text: "J'invente des logos de clients connus sur mon site." },
            { id: "b", text: "Je dis que j'ai signé un accord de confidentialité avec tous mes anciens clients." },
            { id: "c", text: "Je mise sur la transparence, je propose un test à prix réduit ou une garantie de résultats pour mon premier client." },
            { id: "d", text: "Je refuse de répondre." }
        ],
        correctAnswer: "c",
        explanation: "Tout le monde commence quelque part. L'honnêteté combinée à une proposition de valeur forte (prix de lancement ou garantie) attire souvent les bons partenaires."
    },
    {
        id: 20,
        category: "Communication Client",
        scenario: "Le client change d'avis sur le design d'un projet pour la 5ème fois. Le projet stagne.",
        options: [
            { id: "a", text: "Je continue de changer sans rien dire." },
            { id: "b", text: "Je m'énerve et je lui dis qu'il ne sait pas ce qu'il veut." },
            { id: "c", text: "Je lui rappelle poliment le nombre de révisions prévues au contrat et j'explique les frais supplémentaires pour les suivantes." },
            { id: "d", text: "Je fais un design qui me plaît à moi et je lui impose." }
        ],
        correctAnswer: "c",
        explanation: "Le contrat est votre meilleur ami. Il permet de réguler les indécisions du client sans transformer le projet en gouffre financier pour vous."
    }
];
