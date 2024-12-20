const canvas = document.getElementById("networkCanvas");
const ctx = canvas.getContext("2d");

let nodes = [];
let links = [];

// Function to generate random nodes
function simulateNodes() {
    nodes = [];
    links = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 10; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            id: i + 1,
        });
    }

    drawNodes();
}

// Function to draw nodes on canvas
function drawNodes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "#007bff";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.fillStyle = "#fff";
        ctx.font = "12px Arial";
        ctx.fillText(node.id, node.x - 5, node.y + 4);
    });
}

// Function to simulate secure routing
function simulateSecureRouting() {
    if (nodes.length < 2) {
        showAlert("Please generate nodes first!");
        return;
    }

    links = [];
    for (let i = 0; i < nodes.length - 1; i++) {
        links.push({ from: nodes[i], to: nodes[i + 1] });
    }

    drawRouting();
}

// Function to draw secure routing paths
function drawRouting() {
    drawNodes();
    ctx.strokeStyle = "#28a745";
    ctx.lineWidth = 2;

    links.forEach((link) => {
        ctx.beginPath();
        ctx.moveTo(link.from.x, link.from.y);
        ctx.lineTo(link.to.x, link.to.y);
        ctx.stroke();
    });
}

// Function to simulate intrusion detection
function simulateIntrusionDetection() {
    if (nodes.length === 0) {
        showAlert("Please generate nodes first!");
        return;
    }

    const compromisedNode = nodes[Math.floor(Math.random() * nodes.length)];
    drawNodes();

    ctx.beginPath();
    ctx.arc(compromisedNode.x, compromisedNode.y, 12, 0, Math.PI * 2);
    ctx.strokeStyle = "#dc3545";
    ctx.lineWidth = 3;
    ctx.stroke();

    showAlert(`Intrusion detected at Node ${compromisedNode.id}`);
}

// Function to simulate trust management
function simulateTrustManagement() {
    if (nodes.length === 0) {
        showAlert("Please generate nodes first!");
        return;
    }

    drawNodes();

    nodes.forEach((node) => {
        if (Math.random() < 0.3) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, 10, 0, Math.PI * 2);
            ctx.fillStyle = "#ffc107";
            ctx.fill();
            ctx.stroke();
        }
    });

    showAlert("Trust management simulation complete.");
}

// Function to simulate secure data aggregation
function simulateDataAggregation() {
    if (nodes.length < 2) {
        showAlert("Please generate nodes first!");
        return;
    }

    drawNodes();

    nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = "#17a2b8";
        ctx.fill();
        ctx.stroke();
    });

    showAlert("Secure data aggregation in progress.");
}

// Function to display alert messages
function showAlert(message) {
    const alertBox = document.getElementById("alertBox");
    alertBox.textContent = message;
    alertBox.style.display = "block";

    setTimeout(() => {
        alertBox.style.display = "none";
    }, 3000);
}
