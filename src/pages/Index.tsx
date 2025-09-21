import discordLogo from "../assets/discord-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-12">
        {/* Título principal */}
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent drop-shadow-glow-purple">
          Segredos
        </h1>
        
        {/* Seção do Discord */}
        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-muted-foreground">
            clique aqui:
          </p>
          
          <a
            href="https://discord.gg/Cw3ba3kT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group transition-all duration-300 hover:scale-105"
          >
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-glow-purple transition-all duration-300 hover:border-primary">
              <img
                src={discordLogo}
                alt="Discord"
                className="w-20 h-20 mx-auto group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;