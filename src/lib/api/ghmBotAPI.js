export const sendMessageToBot = async (messages) => {
    try {
        // We now use our OWN server as a proxy to avoid CORS and hide the API key
        // The server will forward this to https://api.groq.com/openai/v1/chat/completions
        const response = await fetch("/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-GHM-Client": "ghm-training-app" // Required by server CORS policy
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: [
                    {
                        role: "system",
                        content: `Tu es l'EXPERT TERRAIN de GHM LABS à Kénitra. Coach de vente consultative.

RÈGLES D'INTERACTION :
1. Si l'utilisateur répond par une lettre (A, B, C, D) : évalue immédiatement son choix par rapport au scénario en cours.
2. UTILISE [SUCCESS] ✅, [RISQUE] ⚠️ ou [ECHEC] ❌ pour donner le verdict.
3. Sois bref, direct et exigeant. Explique POURQUOI c'est bon ou mauvais.
4. Après une évaluation, propose de passer à une nouvelle mission ou discute librement.

FORMAT DES SCÉNARIOS :
- [SCÉNARIO] 📌 Titre
- [IMPORTANT] PROBLÈME : Douleur du client.
- 🏢 CONTEXTE / 👔 CIBLE.
- Propose 4 choix (A, B, C, D) sans labels évidents. Les choix doivent être des phrases réalistes.

CONSIGNES DE STYLE :
- Langue : FRANÇAIS 🇫🇷.
- Pas de JSON, pas de code, juste du texte formaté avec des [BALISES].
- Ne mentionne jamais que tu es une IA. Tu es le Coach GHM.`
                    },
                    ...messages.slice(-6) // Only send the last 6 messages to keep it fast and avoid bugs
                ]
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Server Error: ${response.status} - ${errorText.substring(0, 100)}`);
        }

        const data = await response.json();
        return data.choices?.[0]?.message?.content || "Désolé, j'ai eu un petit bug technique. Peux-tu répéter ?";
    } catch (error) {
        console.error("Chat API Error:", error);
        return `❌ ERREUR CONNEXION: ${error.message}`;
    }
};
