// Initialize Lucide icons
lucide.createIcons();

// Mock Data for Applications
const apps = [
    {
        id: 1,
        title: "MedSim VR",
        category: "VR",
        description: "High-fidelity medical training simulation for surgical procedures in Virtual Reality.",
        tags: ["Unity", "VR", "Healthcare"],
        status: "Live"
    },
    {
        id: 2,
        title: "EduQuest Mobile",
        category: "Mobile",
        description: "Gamified learning platform for K-12 students covering math and science curriculums.",
        tags: ["React Native", "Mobile", "Education"],
        status: "Beta"
    },
    {
        id: 3,
        title: "SafetyFirst AR",
        category: "AR",
        description: "Augmented Reality safety training for industrial workers identifying hazards in real-time.",
        tags: ["ARCore", "Mobile", "Industrial"],
        status: "Live"
    },
    {
        id: 4,
        title: "CorpTrain AI",
        category: "Web",
        description: "AI-powered corporate training dashboard that adapts content to employee performance.",
        tags: ["React", "AI", "Enterprise"],
        status: "In Development"
    },
    {
        id: 5,
        title: "HistoryWalk",
        category: "AR",
        description: "Location-based AR experience bringing historical events to life in city centers.",
        tags: ["Niantic Lightship", "AR", "Tourism"],
        status: "Live"
    },
    {
        id: 6,
        title: "CodeMaster 3D",
        category: "Web",
        description: "Browser-based 3D environment for learning programming concepts visually.",
        tags: ["Three.js", "WebGL", "Education"],
        status: "Alpha"
    }
];

const appsGrid = document.getElementById('apps-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderApps(filter = 'All') {
    const displayedApps = filter === 'All' ? apps : apps.filter(app => app.category === filter);
    
    appsGrid.innerHTML = displayedApps.map(app => `
        <div class="glass-card p-6 rounded-3xl group relative overflow-hidden h-full flex flex-col">
            <div class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="mb-4">
                <div class="flex items-start justify-between mb-2">
                    <span class="px-3 py-1 rounded-full text-xs font-bold bg-secondary/10 text-secondary hover:bg-secondary/20">
                        ${app.category}
                    </span>
                    <span class="px-3 py-1 rounded-full text-xs font-bold ${app.status === 'Live' ? 'bg-green-500/20 text-green-500 border border-green-500/50' : 'bg-muted/20 text-muted-foreground border border-muted-foreground/30'}">
                        ${app.status}
                    </span>
                </div>
                <h3 class="text-2xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                    <i data-lucide="rocket" class="w-5 h-5 text-primary"></i>
                    ${app.title}
                </h3>
                <p class="text-base mt-2 line-clamp-2 text-muted-foreground">
                    ${app.description}
                </p>
            </div>
            <div class="mt-auto">
                <div class="flex flex-wrap gap-2 mb-6">
                    ${app.tags.map(tag => `
                        <span class="text-xs px-2 py-1 rounded-md border border-white/20 bg-white/10">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
                <button class="w-full py-3 rounded-xl bg-white/50 hover:bg-primary hover:text-white dark:bg-white/5 dark:hover:bg-primary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 text-foreground font-bold inline-flex items-center justify-center">
                    Learn More
                    <i data-lucide="external-link" class="ml-2 w-4 h-4"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    // Re-initialize Lucide for injected icons
    lucide.createIcons();
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        // Update button styles
        filterBtns.forEach(b => {
            b.classList.remove('bg-primary', 'text-primary-foreground', 'shadow-lg', 'shadow-primary/25', 'scale-105');
            b.classList.add('bg-secondary/10', 'text-secondary', 'hover:bg-secondary/20', 'scale-100');
        });
        
        btn.classList.add('bg-primary', 'text-primary-foreground', 'shadow-lg', 'shadow-primary/25', 'scale-105');
        btn.classList.remove('bg-secondary/10', 'text-secondary', 'hover:bg-secondary/20', 'scale-100');
        
        renderApps(filter);
    });
});

// Initial render
renderApps();
