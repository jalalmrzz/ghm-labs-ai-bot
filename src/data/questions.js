export const questions = [
    {
        id: 1,
        category: "Communication Client",
        scenario: "Vous arrivez au bureau. Votre téléphone sonne : c'est Mr. Alami (Client Immobilier). Il hurle presque : 'C'est quoi ces résultats ?! J'ai payé 5000 DH et j'ai eu 3 appels de curieux qui n'ont pas d'argent ! Vous m'avez promis 50 leads ! Je veux mon argent tout de suite !'. Il est très en colère et menace de vous faire une mauvaise réputation sur LinkedIn.",
        options: [
            { id: "a", text: "Je m'excuse platement et je lui offre un remboursement partiel immédiatement pour calmer le jeu." },
            { id: "b", text: "Je garde un ton calme et professionnel : 'Mr Alami, je comprends votre frustration. Prenons 5 minutes pour regarder les chiffres ensemble. Je vois ici 12 clics qualifiés. Le problème n'est peut-être pas la quantité, mais le ciblage. Analysons la qualité ensemble'." },
            { id: "c", text: "Je lui explique que c'est la faute de l'algorithme de Facebook, que c'était un mois difficile et que je n'y peux rien." },
            { id: "d", text: "Je ne réponds pas et j'attends qu'il se calme le lendemain pour envoyer un email technique." }
        ],
        correctAnswer: "b",
        explanation: "L'empathie et l'écoute sont cruciales, mais ne cédez pas à la panique. En orientant la discussion vers l'analyse objective (ROI/Qualité), vous reprenez le contrôle de l'expert face à l'émotion du client."
    },
    {
        id: 2,
        category: "Négociation",
        scenario: "Vous présentez le devis pour la refonte du site E-commerce à 15.000 DH. Le prospect, un grossiste, rit jaune : 'Vous rigolez ? Mon cousin est étudiant en informatique, il m'a dit qu'il pouvait me faire la même chose sur WordPress pour 2000 DH ce week-end. Pourquoi je vous paierais 7 fois plus cher ?'.",
        options: [
            { id: "a", text: "Je m'aligne sur le prix du cousin à 2000 DH pour ne pas perdre le client, quitte à réduire la qualité." },
            { id: "b", text: "Je critique son cousin en disant qu'il est incompétent et que son site va planter." },
            { id: "c", text: "Je souris et réponds : 'C'est génial pour votre cousin. Mais ici, on ne vend pas juste du code, on vend une boutique qui convertit. Mon tarif inclut le design UX pour vendre, le SEO pour être visible, et la sécurité bancaire. Votre cousin offre-t-il une garantie de conversion ?'." },
            { id: "d", text: "Je me vexe, je range mes affaires et je pars en lui souhaitant bonne chance." }
        ],
        correctAnswer: "c",
        explanation: "Ne combattez pas le prix, combattez la valeur perçue. Montrez le fossé entre 'bricolage' (le cousin) et 'business rentabke' (votre offre). Le client paie pour la tranquillité et le résultat, pas pour des lignes de code."
    },
    {
        id: 3,
        category: "Gestion de Crise",
        scenario: "CATASTROPHE. Vous gérez la page Facebook d'une clinique. Vous avez programmé une publicité hier soir, mais vous avez fait une faute de frappe dans le titre : 'Clinique de la Morte' au lieu de 'Clinique de la Mode'. La pub a tourné toute la nuit, dépensé 500 DH et il y a 50 commentaires qui se moquent. Le directeur vous appelle.",
        options: [
            { id: "a", text: "Je nie avoir fait l'erreur et je dis que c'est un piratage ou un bug de Facebook." },
            { id: "b", text: "Je coupe la pub, j'appelle le directeur AVANT qu'il ne m'appelle : 'J'ai fait une erreur grave. Je l'ai corrigée, et pour m'excuser, je prends les 500 DH de perte à ma charge sur la prochaine facture'." },
            { id: "c", text: "Je corrige discrètement la faute et j'efface les commentaires en espérant que personne n'a fait de capture d'écran." },
            { id: "d", text: "Je lui dis que l'orthographe n'est pas grave car ça a fait du buzz et de la visibilité gratuite." }
        ],
        correctAnswer: "b",
        explanation: "L'honnêteté radicale est la seule sortie. En prévenant le client et en payant pour votre erreur, vous montrez une intégrité totale. Cacher l'erreur détruirait la confiance à jamais."
    },
    {
        id: 4,
        category: "Présentation de Résultats",
        scenario: "Réunion mensuelle avec un client B2B (Industrie). Vous projetez des slides avec des graphiques. Le client fronce les sourcils quand vous dites : 'Le CTR est monté à 2% et le Taux de Rebond a baissé de 15%'. Il vous coupe : 'Arrêtez avec vos mots chinois. Ça me rapporte combien tout ça ? Je ne comprends rien !'.",
        options: [
            { id: "a", text: "Je continue d'utiliser le jargon pour lui montrer que je suis un technicien expert." },
            { id: "b", text: "Je lui donne la définition académique du CTR et du Taux de Rebond." },
            { id: "c", text: "Je change immédiatement de langage : 'Pardon. En clair : 2 fois plus de gens intéressés ont cliqué, et ils sont restés plus longtemps sur le site, ce qui veut dire qu'on a capté des prospects plus chauds'." },
            { id: "d", text: "Je lui dis qu'il n'a pas besoin de comprendre la technique, juste de me faire confiance." }
        ],
        correctAnswer: "c",
        explanation: "Un client confus est un client qui part. Votre rôle est de TRADUIRE la donnée technique en impact business compréhensible. Adaptez votre vocabulaire à celui du client."
    },
    {
        id: 5,
        category: "Vente",
        scenario: "Vous êtes en closing. Le client (Gérant de Salle de Sport) a le stylo en main mais hésite. Il pose le stylo : 'J'ai peur de m'engager sur 6 mois... Et si ça ne marche pas ? C'est beaucoup d'argent pour moi'. Il vous regarde dans les yeux, anxieux.",
        options: [
            { id: "a", text: "Je lui promets par écrit qu'il aura 100 inscriptions par mois (même si c'est impossible à garantir)." },
            { id: "b", text: "Je sors mon dossier 'Preuve Sociale' : 'Je comprends. Regardez ces 3 autres salles qu'on a accompagnées. Voici leurs résultats au mois 1, 3 et 6. On ne promet pas la lune, mais on a une méthode prouvée. Commençons par un objectif réaliste de 20 inscrits'." },
            { id: "c", text: "Je lui mets la pression : 'L'offre spéciale expire dans 10 minutes. C'est maintenant ou jamais'." },
            { id: "d", text: "Je lui dis que le business c'est du risque et qu'il faut être courageux." }
        ],
        correctAnswer: "b",
        explanation: "Face à la peur, apportez la RASSURANCE, pas la pression. La preuve sociale (cas similaires) et des objectifs progressifs débloquent la peur de l'échec."
    },
    {
        id: 6,
        category: "Communication Client",
        scenario: "Dimanche soir, 22h30. Vous êtes en famille. Votre téléphone vibre non-stop. C'est un client qui vous envoie 10 messages WhatsApp et 3 photos : 'Change la bannière du site MAINTENANT, j'ai une nouvelle idée ! C'est URGENT !'.",
        options: [
            { id: "a", text: "Je laisse ma famille, je saute sur mon ordi et je fais la modif pour montrer que je suis ultra-réactif." },
            { id: "b", text: "Je ne réponds pas. Je laisse le téléphone de côté. Lundi matin à 9h00, je l'appelle pour traiter sa demande calmement." },
            { id: "c", text: "Je lui réponds énervé : 'C'est dimanche, respectez ma vie privée !'." },
            { id: "d", text: "J'ai configuré une réponse automatique WhatsApp Business : 'Merci de votre message. Nos horaires sont Lun-Ven 9h-18h. Votre demande sera traitée en priorité demain matin'." }
        ],
        correctAnswer: "d",
        explanation: "Éduquez vos clients. Si vous répondez le dimanche, vous devenez l'esclave du client pour toujours. L'automatisation (réponse auto) est la manière professionnelle de dire 'Non, mais je vous ai entendu'."
    },
    {
        id: 7,
        category: "Vente",
        scenario: "Le prospect est un investisseur sérieux. Il vous challenge : 'Très bien votre présentation GHM. Mais moi je veux du concret. Pouvez-vous me GARANTIR un ROI de 500% sur 3 mois ? Si vous garantissez, je signe un chèque de 100.000 DH tout de suite'.",
        options: [
            { id: "a", text: "Je dis 'OUI' tout de suite pour prendre le chèque, on verra après." },
            { id: "b", text: "Je dis 'Non, c'est impossible'." },
            { id: "c", text: "Je le regarde droit dans les yeux : 'Monsieur, si je vous garantissais ça, je serais un menteur. Le marché change. Par contre, je vous garantis une optimisation quotidienne et une transparence totale. Est-ce que vous préférez un menteur qui vous rassure ou un expert qui se bat pour vos résultats ?'." },
            { id: "d", text: "Je lui dis que ça dépendra de la qualité de ses produits, pas de moi." }
        ],
        correctAnswer: "c",
        explanation: "La transparence radicale (Radical Candor) bat la fausse promesse. Les vrais décideurs respectent ceux qui ne se couchent pas devant l'argent et qui gardent leur intégrité technique."
    },
    {
        id: 8,
        category: "Prix & Contrat",
        scenario: "Vous avez fini le site web du client comme prévu. Il vous appelle : 'C'est super ! Ah, au fait, j'ai besoin d'une petite page en plus pour mes partenaires, et un système de réservation... Ça prend 5 minutes non ? Tu me fais ça en cadeau ?'.",
        options: [
            { id: "a", text: "Je le fais gratuitement pour éviter le conflit et le fidéliser." },
            { id: "b", text: "Je réponds : 'Avec plaisir ! Pour ces ajouts (Page + Réservation), cela représente 2 jours de travail dev. Je vous envoie le devis complémentaire tout de suite, on le valide et je lance ça'." },
            { id: "c", text: "Je le fais une fois, mais je lui dis que c'est la dernière fois." },
            { id: "d", text: "Je refuse en disant que ce n'est pas dans le contrat." }
        ],
        correctAnswer: "b",
        explanation: "Luttez contre le 'Scope Creep' (dérapage de mission). Tout travail mérite salaire. Valorisez votre temps. Si vous dites 'Oui' gratuitement, votre temps ne vaut plus rien."
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
    },
    {
        id: 21,
        category: "Prospection Terrain",
        scenario: "Vous entrez dans une agence immobilière de luxe. Le gérant vous regarde à peine et dit : 'On a déjà tout, ne perdez pas mon temps'.",
        options: [
            { id: "a", text: "Je m'excuse et je sors discrètement." },
            { id: "b", text: "Je réponds : 'Je vois que vous êtes un expert. Justement, j'ai remarqué un détail sur votre fiche Google qui fait fuir vos clients. On en parle 2 minutes ?'." },
            { id: "c", text: "Je lui tends ma carte de visite et je lui demande de m'appeler quand il aura le temps." },
            { id: "d", text: "Je commence à lister les services de GHM LABS à voix haute." }
        ],
        correctAnswer: "b",
        explanation: "Sur le terrain, il faut casser le schéma mental du prospect. En pointant un problème précis et immédiat (douleur), vous captez son attention instantanément."
    },
    {
        id: 22,
        category: "Closing",
        scenario: "Le client est prêt à signer à 4000 DH, mais il demande soudainement : 'Si je prends le contrat sur un an, vous me faites -50% ?'.",
        options: [
            { id: "a", text: "J'accepte tout de suite pour verrouiller le contrat." },
            { id: "b", text: "Je refuse catégoriquement sans négocier." },
            { id: "c", text: "Je réponds : 'Une remise de 50% n'est pas possible car nos experts s'investissent à fond. Par contre, je peux vous offrir le premier mois de gestion Ads si on signe aujourd'hui.'." },
            { id: "d", text: "Je lui demande combien il est prêt à payer alors." }
        ],
        correctAnswer: "c",
        explanation: "Ne bradez jamais votre valeur de moitié. Proposez un bonus à faible coût pour vous mais à haute valeur perçue pour lui pour conclure la vente."
    },
    {
        id: 23,
        category: "Gestion de Crise",
        scenario: "En pleine présentation de site web, le site plante et affiche une erreur 404 devant le client. Que faites-vous ?",
        options: [
            { id: "a", text: "Je panique et je m'excuse pendant 10 minutes." },
            { id: "b", text: "Je reste de marbre : 'C'est parfait, cela montre la sécurité de nos serveurs de test en cours de maintenance. Passons à la structure des pages sur mes slides.'." },
            { id: "c", text: "Je blâme le développeur devant le client." },
            { id: "d", text: "Je ferme mon ordinateur et je propose de reporter la réunion." }
        ],
        correctAnswer: "b",
        explanation: "Gardez votre sang-froid (le 'Poker Face'). Le client achète votre assurance. Détournez l'attention vers la valeur (stratégie) plutôt que sur l'incident technique passager."
    },
    {
        id: 24,
        category: "Vente Consultative",
        scenario: "Un propriétaire de café veut 'plus de likes' sur Facebook. Vous savez que les Facebook Ads pour des réservations directes seraient plus rentables.",
        options: [
            { id: "a", text: "Je vends un package de likes car c'est ce qu'il a demandé." },
            { id: "b", text: "Je lui explique que les likes ne paient pas les factures, et je lui montre une simulation de revenus avec des publicités de conversion." },
            { id: "c", text: "Je lui dis qu'il n'y comprend rien au marketing." },
            { id: "d", text: "Je lui vends les deux pour gagner plus d'argent." }
        ],
        correctAnswer: "b",
        explanation: "Votre rôle de consultant GHM est de conseiller ce qui rapporte de l'argent (ROI), pas de simplement satisfaire l'ego du client avec des métriques inutiles."
    },
    {
        id: 25,
        category: "Négociation",
        scenario: "Un grand groupe local vous demande un délai de paiement de 90 jours. Que faites-vous ?",
        options: [
            { id: "a", text: "J'accepte, c'est un gros client donc je subis." },
            { id: "b", text: "Je refuse et je demande un paiement comptant à la signature." },
            { id: "c", text: "Je propose : 'Pour un compte de votre envergure, nous acceptons exceptionnellement 45 jours si nous validons un contrat d'accompagnement de 12 mois.'." },
            { id: "d", text: "Je demande une avance de 10% seulement." }
        ],
        correctAnswer: "c",
        explanation: "Négociez toujours un avantage en échange d'une concession. Si vous cédez sur le délai, demandez de la récurrence (contrat long) pour sécuriser votre trésorerie."
    },
    {
        id: 26,
        category: "E-réputation",
        scenario: "Un concurrent de votre client vient de laisser 10 faux avis 1 étoile sur sa page Google My Business ce matin.",
        options: [
            { id: "a", text: "Je conseille au client d'ignorer et d'attendre." },
            { id: "b", text: "Je réponds à chaque avis de manière agressive pour les démasquer." },
            { id: "c", text: "Je mets en place une procédure de signalement immédiate à Google et je lance une campagne d'avis positifs auprès de ses vrais clients." },
            { id: "d", text: "Je demande au client de fermer sa page Google." }
        ],
        correctAnswer: "c",
        explanation: "La réactivité est la clé. On ne supprime pas facilement un avis, mais on peut le noyer sous du positif et lancer des alertes officielles."
    },
    {
        id: 27,
        category: "Prospection",
        scenario: "La secrétaire vous bloque le passage : 'M. le Directeur ne reçoit personne sans rendez-vous'.",
        options: [
            { id: "a", text: "Je m'en vais et je reviens demain." },
            { id: "b", text: "Je lui dis que c'est une urgence vitale pour la boîte." },
            { id: "c", text: "Je valorise son rôle : 'Je comprends, vous protégez son temps. Je lui ai préparé un audit de 2 pages sur sa visibilité à Kénitra. Pouvez-vous lui poser sur son bureau ? Je le rappelle demain à 10h.'." },
            { id: "d", text: "Je lui demande son numéro personnel pour passer outre." }
        ],
        correctAnswer: "c",
        explanation: "Traitez la secrétaire comme une alliée, pas un obstacle. Donnez-lui une mission valorisante (déposer un document de valeur) pour entrer dans le radar du décideur."
    },
    {
        id: 28,
        category: "Vente",
        scenario: "Un client vous demande : 'Pourquoi devrais-je travailler avec GHM LABS plutôt qu'avec une agence à Casablanca ?'.",
        options: [
            { id: "a", text: "Parce qu'on est moins chers." },
            { id: "b", text: "Parce qu'on est à Kénitra, on connaît le marché local et on peut être dans vos bureaux en 10 minutes s'il y a un problème." },
            { id: "c", text: "Parce que les agences de Casa sont des arnaqueurs." },
            { id: "d", text: "Je ne sais pas, on fait le même travail." }
        ],
        correctAnswer: "b",
        explanation: "La proximité et la réactivité sont des arguments massifs pour un chef d'entreprise local. Vendre l'humain et la présence physique bat souvent le prestige lointain."
    },
    {
        id: 29,
        category: "Closing",
        scenario: "Le client a validé le devis oralement, mais cela fait 10 jours qu'il ne signe pas le document envoyé par email.",
        options: [
            { id: "a", text: "Je le harcèle en l'appelant 3 fois par jour." },
            { id: "b", text: "J'attends qu'il se manifeste." },
            { id: "c", text: "Je passe le voir avec une version papier : 'Je passais dans le quartier, j'en ai profité pour vous apporter le dossier pour qu'on commence la prod dès demain.'." },
            { id: "d", text: "Je lui envoie un email de menace d'annulation d'offre." }
        ],
        correctAnswer: "c",
        explanation: "Le retour au physique élimine les barrières du digital (emails perdus ou oubliés). C'est le 'coup de grâce' pour un closing efficace."
    },
    {
        id: 30,
        category: "Expertise GHM",
        scenario: "Un prospect vous dit que le SEO est mort et que seul TikTok compte aujourd'hui.",
        options: [
            { id: "a", text: "Je suis d'accord et je vends du TikTok." },
            { id: "b", text: "Je lui montre que 80% des intentions d'achat passent encore par Google Search et que TikTok est un complément de notoriété, pas de conversion directe." },
            { id: "c", text: "Je lui dis qu'il est démodé." },
            { id: "d", text: "Je refuse de travailler avec quelqu'un qui pense ça." }
        ],
        correctAnswer: "b",
        explanation: "Éduquez votre prospect. Différenciez la 'Hype' (TikTok) de la 'Rentabilité Froide' (SEO/Google). L'équilibre des canaux est la marque d'une vraie stratégie d'agence."
    },
    {
        id: 31,
        category: "Écoute Active",
        scenario: "En début de RDV, le client vous dit : 'Je n'ai que 10 minutes'. Que faites-vous ?",
        options: [
            { id: "a", text: "Je parle deux fois plus vite pour tout dire." },
            { id: "b", text: "Je dis : 'C'est court. Allons à l'essentiel : quel est le problème N°1 qui freine votre croissance aujourd'hui ?'." },
            { id: "c", text: "Je m'excuse et je propose un autre RDV." },
            { id: "d", text: "Je lui tends ma brochure et je pars." }
        ],
        correctAnswer: "b",
        explanation: "Acceptez la contrainte et pivotez immédiatement sur SA douleur. S'il parle de son problème, les 10 minutes deviendront une heure."
    },
    {
        id: 32,
        category: "Closing",
        scenario: "Le client dit : 'C'est intéressant, mais je ne peux pas décider maintenant, rappelez-moi le mois prochain'.",
        options: [
            { id: "a", text: "D'accord, je note dans mon agenda." },
            { id: "b", text: "Je demande : 'Qu'est-ce qui aura changé le mois prochain qui rendra la décision plus facile ?'." },
            { id: "c", text: "Je lui propose une réduction s'il signe maintenant." },
            { id: "d", text: "Je lui dis qu'il fait une erreur." }
        ],
        correctAnswer: "b",
        explanation: "Traitez l'objection 'temps' comme une objection cachée. Souvent, ce n'est pas le moment le problème, c'est l'incertitude ou le budget."
    },
    {
        id: 33,
        category: "Offre & Valeur",
        scenario: "Vous présentez un devis SEO à 6000 DH/mois. Le client sursaute : 'C'est énorme !'.",
        options: [
            { id: "a", text: "Je baisse immédiatement à 3000 DH." },
            { id: "b", text: "Je lui demande : 'Par rapport à quoi ? Combien vous rapporte un seul nouveau client par an ?'." },
            { id: "c", text: "Je m'excuse, c'est vrai que c'est cher." },
            { id: "d", text: "Je lui dis que la qualité se paie." }
        ],
        correctAnswer: "b",
        explanation: "Recadrez le prix par rapport au retour sur investissement (ROI). Si votre SEO lui rapporte 100 000 DH, alors 6000 DH est une bonne affaire."
    },
    {
        id: 34,
        category: "Psychologie Client",
        scenario: "Le client est très bavard et vous raconte ses vacances au lieu de parler business.",
        options: [
            { id: "a", text: "Je le coupe sèchement : 'Revenons à nos moutons'." },
            { id: "b", text: "Je l'écoute 2 minutes, je crée du lien ('Sympa !'), puis je fais une transition douce : 'D'ailleurs, pour financer vos prochaines vacances, parlons de votre CA...'." },
            { id: "c", text: "Je regarde ma montre avec insistance." },
            { id: "d", text: "Je fais semblant d'être intéressé pendant 30 minutes." }
        ],
        correctAnswer: "b",
        explanation: "Le rapport humain (Rapport Building) est vital, mais vous devez garder le contrôle du cadre (Frame). Utilisez son énergie pour revenir au business."
    },
    {
        id: 35,
        category: "Découverte",
        scenario: "Vous ne savez pas quel budget le client a. Comment lui demander ?",
        options: [
            { id: "a", text: "Quel est votre budget maximum ?" },
            { id: "b", text: "Combien voulez-vous dépenser ?" },
            { id: "c", text: "Pour atteindre vos objectifs de +20% de ventes, quelle enveloppe d'investissement aviez-vous envisagée ?" },
            { id: "d", text: "Avez-vous de l'argent ?" }
        ],
        correctAnswer: "c",
        explanation: "Ne demandez pas un coût ('dépenser'), demandez un investissement lié à un objectif. Cela justifie la question et débloque la vérité."
    },
    {
        id: 36,
        category: "Objection",
        scenario: "Le client dit : 'J'ai déjà essayé Facebook Ads ça ne marche pas'.",
        options: [
            { id: "a", text: "C'est parce que vous l'avez mal fait." },
            { id: "b", text: "Ah bon ? Racontez-moi ce qui s'est passé exactement." },
            { id: "c", text: "Avec nous ça marchera, promis." },
            { id: "d", text: "Facebook a changé, c'est mieux maintenant." }
        ],
        correctAnswer: "b",
        explanation: "Avant de contre-attaquer, enquêtez. Souvent, il a juste boosté un post sans stratégie. Votre diagnostic de son échec passé vendra votre expertise future."
    },
    {
        id: 37,
        category: "Vente Additionnelle",
        scenario: "Le client est content de son Site Web livré. C'est le moment de...",
        options: [
            { id: "a", text: "Lui dire merci et au revoir." },
            { id: "b", text: "Lui vendre un contrat de maintenance et SEO pour ne pas laisser son site 'mourir'." },
            { id: "c", text: "Lui demander s'il connaît d'autres gens qui veulent un site." },
            { id: "d", text: "Lui envoyer la facture finale." }
        ],
        correctAnswer: "b",
        explanation: "Le 'Cross-sell' au moment de la satisfaction maximale est le plus facile. Transformez un projet 'One-shot' en revenu récurrent."
    },
    {
        id: 38,
        category: "Négociation",
        scenario: "Le client vous compare à une grosse agence parisienne. 'Ils font la même chose que vous'.",
        options: [
            { id: "a", text: "Oui mais nous on est moins chers." },
            { id: "b", text: "Non, eux ils sous-traitent tout. Nous, on est des artisans du digital, on fait du sur-mesure local." },
            { id: "c", text: "Critiquer les parisiens." },
            { id: "d", text: "Dire qu'on est pareils." }
        ],
        correctAnswer: "b",
        explanation: "Différenciez-vous par l'approche 'Boutique' vs 'Usine'. La proximité, le sur-mesure et la réactivité sont vos armes fatales contre les gros."
    },
    {
        id: 39,
        category: "Communication",
        scenario: "Vous devez annoncer une augmentation de vos tarifs annuels de 10% à un vieux client.",
        options: [
            { id: "a", text: "Je l'annonce par email en mettant le comptable en copie." },
            { id: "b", text: "Je ne dis rien et change la facture en espérant qu'il ne voie rien." },
            { id: "c", text: "Je l'appelle : 'Grâce à nos résultats, votre business a grandi. Pour maintenir ce niveau d'excellence et les nouveaux outils, nos tarifs s'ajustent...'." },
            { id: "d", text: "Je m'excuse en disant que c'est l'inflation." }
        ],
        correctAnswer: "c",
        explanation: "Vendez l'augmentation comme une garantie de qualité continue. Reliez-la à la valeur apportée, pas à vos coûts (inflation)."
    },
    {
        id: 40,
        category: "Closing",
        scenario: "Le client : 'Envoyez-moi tout ça par mail, je regarderai'. (Le classique 'Brush-off')",
        options: [
            { id: "a", text: "Ok, je vous envoie ça tout de suite." },
            { id: "b", text: "Je refuse d'envoyer des emails." },
            { id: "c", text: "Bien sûr. Mais pour que mon mail soit pertinent, qu'est-ce que vous chercherez précisément à voir dedans : le prix ou la stratégie ?" },
            { id: "d", text: "Je vous rappelle la semaine prochaine." }
        ],
        correctAnswer: "c",
        explanation: "Ne soyez pas un 'distributeur de devis'. Qualifiez l'intérêt. S'il ne sait pas ce qu'il veut voir, il ne l'ouvrira jamais."
    },
    {
        id: 41,
        category: "Psychologie",
        scenario: "Le client a un ego surdimensionné et pense tout savoir sur le marketing.",
        options: [
            { id: "a", text: "Je lui prouve qu'il a tort avec des chiffres." },
            { id: "b", text: "Je flatte son ego : 'Vous avez l'œil ! C'est exactement pour ça qu'on pourrait...", },
            { id: "c", text: "Je l'ignore." },
            { id: "d", text: "Je me bats avec lui sur chaque point." }
        ],
        correctAnswer: "b",
        explanation: "Utilisez l'Aïkido verbal. Ne bloquez pas l'ego, utilisez sa force. Validez-le ('Vous avez raison') pour mieux rediriger vers votre solution."
    },
    {
        id: 42,
        category: "Prospection",
        scenario: "Vous appelez un prospect, il répond : 'Je ne suis pas intéressé' avant même de savoir qui vous êtes.",
        options: [
            { id: "a", text: "Vous ne savez même pas ce que je vends !" },
            { id: "b", text: "Au revoir." },
            { id: "c", text: "'C'est normal, je n'ai rien proposé encore ! Je vous appelais juste pour vérifier si vous acceptiez encore de nouveaux clients sur Kénitra ?'" },
            { id: "d", text: "Je continue mon script sans écouter." }
        ],
        correctAnswer: "c",
        explanation: "Le 'Pattern Interrupt'. Une phrase inattendue qui inverse les rôles (c'est vous qui lui apportez du business ?) force l'écoute."
    },
    {
        id: 43,
        category: "Vente",
        scenario: "Le client demande : 'Est-ce que je serai premier sur Google en 1 mois ?'.",
        options: [
            { id: "a", text: "Oui, facile." },
            { id: "b", text: "Non. Si quelqu'un vous dit oui, c'est un menteur. Le SEO est un marathon, mais on verra des progrès dès le mois 3." },
            { id: "c", text: "Peut-être, ça dépend." },
            { id: "d", text: "Avec Google Ads oui, mais pas en SEO." }
        ],
        correctAnswer: "b",
        explanation: "L'autorité se gagne par la vérité, même si elle déçoit au début. Vous le protégez des attentes irréalistes et des charlatans."
    },
    {
        id: 44,
        category: "Offre GHM",
        scenario: "Le client hésite entre un Community Management simple et une stratégie Ads payante.",
        options: [
            { id: "a", text: "Prenez le moins cher (CM)." },
            { id: "b", text: "Le CM c'est pour l'image, les Ads c'est pour le Cash. Quel est votre priorité ce mois-ci : être beau ou être riche ?" },
            { id: "c", text: "Prenez les deux." },
            { id: "d", text: "Je ne sais pas." }
        ],
        correctAnswer: "b",
        explanation: "La 'Dichotomie Simplifiée'. Résumez le choix complexe en une alternative simple et impactante qui guide vers la solution la plus rentable (Ads)."
    },
    {
        id: 45,
        category: "Gestion Client",
        scenario: "Le client ne vous a pas envoyé les photos pour son site depuis 2 mois. Le projet est bloqué.",
        options: [
            { id: "a", text: "J'attends sans rien dire." },
            { id: "b", text: "Je ferme le projet et je garde l'acompte." },
            { id: "c", text: "J'appelle : 'M. le Client, sans les photos vendredi, on devra décaler le lancement à dans 3 mois car mon planning se remplit. On fait quoi (a) ou (b) ?'." },
            { id: "d", text: "Je mets des photos banque d'images sans lui dire." }
        ],
        correctAnswer: "c",
        explanation: "Créez l'urgence par la perte (Fear Of Missing Out/Loss). La peur de perdre sa place dans le planning est plus motivante que l'envie de finir."
    },
    {
        id: 46,
        category: "Closing",
        scenario: "Le dernier rendez-vous s'est bien passé, mais silence radio depuis 1 semaine.",
        options: [
            { id: "a", text: "J'envoie un mail : 'Alors ?'." },
            { id: "b", text: "J'appelle pour donner une info de valeur : 'J'ai vu une news sur votre secteur ce matin, ça confirme qu'on doit lancer la campagne vite...'." },
            { id: "c", text: "Je laisse tomber." },
            { id: "d", text: "Je vais camper devant son bureau." }
        ],
        correctAnswer: "b",
        explanation: "Ne relancez jamais 'pour prendre des nouvelles'. Relancez toujours 'pour donner de la valeur'. Ça garde la porte ouverte sans faire mendiant."
    },
    {
        id: 47,
        category: "Négociation",
        scenario: "Le client : 'Je signe si vous m'offrez le logo gratuitement'.",
        options: [
            { id: "a", text: "Ok, c'est offert." },
            { id: "b", text: "Non le logo c'est payant." },
            { id: "c", text: "D'accord pour le logo offert, MAIS on signe sur un engagement de 6 mois au lieu de 3. Deal ?" },
            { id: "d", text: "Je vais demander à mon patron." }
        ],
        correctAnswer: "c",
        explanation: "Le 'Give and Take'. Ne donnez jamais rien gratuitement. Échangez-le contre quelque chose de valeur égale ou supérieure."
    },
    {
        id: 48,
        category: "Écoute",
        scenario: "Le client utilise des mots vagues : 'Je veux un site moderne qui pète'.",
        options: [
            { id: "a", text: "Je dis 'Ok super' et je fais n'importe quoi." },
            { id: "b", text: "Je creuse : 'C'est quoi 'moderne' pour vous ? Avez-vous 3 exemples de sites que vous adorez et 3 que vous détestez ?'" },
            { id: "c", text: "Je lui montre mes templates." },
            { id: "d", text: "Je lui vends le template le plus cher." }
        ],
        correctAnswer: "b",
        explanation: "Clarifier, c'est vendre. Si vous ne définissez pas ses termes, vous allez travailler pour rien et il sera déçu."
    },
    {
        id: 49,
        category: "Confiance",
        scenario: "Le client a peur de vous donner ses codes d'accès Facebook/Google.",
        options: [
            { id: "a", text: "Je m'énerve." },
            { id: "b", text: "Je lui propose de signer un NDA (Accord de confidentialité) et je lui montre comment me donner un accès 'Partenaire' sans donner son mot de passe personnel." },
            { id: "c", text: "Je lui demande de tout faire lui-même." },
            { id: "d", text: "Je pirate son compte." }
        ],
        correctAnswer: "b",
        explanation: "Rassurez par la technique et le juridique. Montrez que vous maîtrisez les outils pro (Business Manager) qui protègent sa sécurité."
    },
    {
        id: 50,
        category: "Vision",
        scenario: "Le client veut arrêter sa pub car 'c'est l'été et tout le monde est en vacances'.",
        options: [
            { id: "a", text: "Ok on arrête." },
            { id: "b", text: "Erreur ! Pendant que vos concurrents arrêtent, le coût par clic baisse. C'est le moment de prendre des parts de marché à bas prix pour la rentrée." },
            { id: "c", text: "Je lui dis qu'il est bête." },
            { id: "d", text: "Je continue la pub sans lui dire." }
        ],
        correctAnswer: "b",
        explanation: "Le Consultant voit ce que le client ne voit pas. Vendez le 'Contre-cyclique'. Quand les autres dorment, les leaders gagnent du terrain."
    }
];
