import * as helper from './helper.js';

const file = helper.getData();
const actors = file["actors"];
const kiss = file["kiss"];
const offical_cp = file["offical_cp"];
// const tv_series = file["tv_series"];


var nodes = new vis.DataSet();
var edges = new vis.DataSet();

var real_life_kiss = new vis.DataSet();
var tv_show_kisses = new vis.DataSet();

var real_life_nodes = new vis.DataSet();
var tv_show_nodes = new vis.DataSet();

var DIR = "assets";

// Add nodes
for (let i = 0; i < actors.length; i++) {
    const node = JSON.parse(JSON.stringify(actors[i]));
    // console.log(node)
    const names = "Name: " + (node.also_known_as).join(", ");
    const cpname = "CP Name: " + node.cp_name;
    const role = "Role: " + node.role;
    const node_str = [names, cpname, role].join('\n');
    
    let image_path = DIR + "/" + actors[i].name + ".jpg";
    // console.log(image_path);
    
    let node_object = {
        id: actors[i].id, 
        shape: "image",
        image: image_path,
        label: actors[i].name, 
        category: actors[i].role, 
        title: node_str,
    }

    // add cp color to label background
    const curr_cp_name = actors[i].cp_name;
    if (curr_cp_name in offical_cp) {
        if ('color' in offical_cp[curr_cp_name]) {
            node_object.font = { background: offical_cp[curr_cp_name].color } 
        }
    }

    const all_kisses = kiss.filter((k) => k.input === node.id || k.output === node.id);
    if (all_kisses.length > 0) {
        nodes.add(node_object); 
    }
    const real_life_kisses = all_kisses.filter((k) => k.introduced_at.length === 0 );
    if (real_life_kisses.length > 0) {
        real_life_nodes.add(node_object);
    }

    const tv_show_kisses = all_kisses.filter((k) => k.introduced_at.length > 0 );
    if (tv_show_kisses.length > 0) {
        tv_show_nodes.add(node_object);
    }
}

// Add edges
for (let i = 0; i < kiss.length; i++) {
    const edge = JSON.parse(JSON.stringify(kiss[i]));
    const in_real_life = edge.introduced_at.length === 0;

    const tv_series = !in_real_life ? "At: " + edge.introduced_at.join(", ") : "At: Real life";
    const on_the_lips = "Kissed on the lips: " + String(edge.on_the_lips)
    const dating = edge.dating ? "\nDating: true" : "";

    let edge_str = [tv_series, on_the_lips].join('\n');
    edge_str = edge_str + dating;

    let edge_obj = {
        id: kiss[i].id,
        from: kiss[i].input, 
        to: kiss[i].output, 
        weight: kiss[i].weight, 
        title: edge_str, 
        dashes: kiss[i].indirective,
        arrowStrikethrough: false
    }
    
    // decide arrow direction
    edge_obj.arrows = { to: { enabled: true, type: "arrow" }};
    if (kiss[i].on_the_lips) {
        edge_obj.arrows.from = { enabled: true, type: "arrow" };
    } else {
        edge_obj.color = "green";
    }

    if (kiss[i].dating) {
        edge_obj.color = "pink";
    } else if (in_real_life === true) {
        edge_obj.color = "purple";
    }

    edges.add(edge_obj);

    if (edge_obj.color === 'purple' || edge_obj.color === 'pink') {
        real_life_kiss.add(edge_obj);
    } else {
        tv_show_kisses.add(edge_obj);
    }
}

// Create network
const container = document.getElementById("mynetwork");
var all_data = {
    nodes: nodes,
    edges: edges
};

var real_life_data = {
    nodes: real_life_nodes,
    edges: real_life_kiss
}

var tv_show_data = {
    nodes: tv_show_nodes,
    edges: tv_show_kisses
}

var options = {
    autoResize: true,
    height: '100%',
    width: '100%',
    clickToUse: false,
    nodes: {
        color: {
          border: "#2B7CE9", // default color for unselected nodes
          background: "#97C2FC", // default color for unselected nodes
        },
        font: {
          color: "#343434"
        },
        scaling: {
          min: 10,
          max: 30,
        },
        labelHighlightBold: true
    },
    edges: {
        color: {
            color: "red", 
            highlight: "blue",
            hover: "cyan",
            opacity: 0.5,
        },
        selectionWidth: 2,
        smooth: {
            type: 'discrete',
            forceDirection: 'none'
        },
    },
    interaction: {
        hover: true,
        tooltipDelay: 0,
        zoomView: true,
        zoomSpeed: 0.2,
        dragView: true,
        multiselect: true,
        navigationButtons: true,
    },
    physics: {
        enabled: false
    },
    layout: {
        improvedLayout: true,
        randomSeed: 0,
    }
};
var network = new vis.Network(container, tv_show_data, options);

// console.log(network.getSeed());

const showAllKisses = document.getElementById("show-all-kisses");
const showRealLifeKisses = document.getElementById("show-real-life-kisses");
const showTVShowKisses = document.getElementById("show-tv-show-kisses");

showAllKisses.addEventListener("click", function(event) {
    event.preventDefault();
    network.setData(all_data);
});

  
showRealLifeKisses.addEventListener("click", function(event) {
    event.preventDefault();
    network.setData(real_life_data);
});

showTVShowKisses.addEventListener("click", function(event) {
    event.preventDefault();
    network.setData(tv_show_data);
});
