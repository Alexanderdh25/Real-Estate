let agentsData;

export function renderAgentsContent(data) {
    const agentsInfoContainer = document.querySelector('.agents-cards');

    agentsData = data.agentData;
      agentsData.forEach(function(agentData) {
        const html = `
          <div class="agent-card">
            <img src="${agentData.imgSrc}" alt="Card 2" class="agent-image">
            <div class="agent-content">
              <h3 class="agent-fullname">${agentData.fullname}</h3>
              <p class="agent-proffesion">${agentData.profession}</p>
            </div>
          </div>
        `;
        agentsInfoContainer.insertAdjacentHTML('beforeend', html);
      });
}