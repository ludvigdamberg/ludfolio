"use client"
import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { FaExternalLinkAlt, FaFilter, FaSearch } from "react-icons/fa"
import gsap from 'gsap'
import Link from 'next/link'
import MagneticBig from './MagneticBig'


export default function Home() {
    const svgRef = useRef(null);
    const [nodeHover, setNodeHover] = useState(null);
    const simulationRef = useRef(null);
    const inputRef = useRef("")

    useEffect(() => {

        setTimeout(() => {
            const svg = d3.select(svgRef.current);
            const { width, height } = svg.node().getBoundingClientRect();
            d3.json('plot.json').then(data => {
                initializeGraph(width, height, data);
            })
        }, 1000)


    }, []);


    const initializeGraph = (width, height, data) => {
        const color = d3.scaleOrdinal(d3.schemeCategory10);

        const nodes = data.nodes.map(d => ({ ...d }));
        const links = data.links.map(d => ({ ...d }));

        const simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id(d => d.id).distance(30)) // Adjust the distance value
            .force('charge', d3.forceManyBody().strength(-75))
            .force('x', d3.forceX(width / 2.5).strength(0.1))
            .force('y', d3.forceY(height / 2).strength(0.1));

        simulationRef.current = simulation;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove(); // Clear previous elements
        nodes.forEach(node => {
            node.x = width / 2.5;
            node.y = height / 2;
        });

        const link = svg.append('g')
            .attr('stroke', '#999')
            .attr('stroke-opacity', 0.6)
            .selectAll('line')
            .data(links)
            .join('line')
            .attr('stroke-width', 1);

        const node = svg.append('g')
            .attr('stroke', '#fff')
            .attr('stroke-width', 0.3)
            .selectAll('circle')
            .data(nodes)
            .join('circle')
            .attr('r', 4)
            .attr('fill', '#fff')
            .on('mouseover', handleMouseOver)


        function handleMouseOver(event) {
            // Access the DOM element
            const targetElement = event.target;

            // Access the data associated with the node
            const nodeData = targetElement.__data__;

            // Check if there's data before accessing properties
            if (nodeData && typeof nodeData === "object") {
                const { id, label } = nodeData;
                setNodeHover(nodeData);
            }

            gsap.from(".info", {
                opacity: 0,
                x: -10
            })
            gsap.to(".info", {
                opacity: 1,
                duration: 0.5,
                x: 0,
                ease: "back.out"
            })
        }

        node.append('title')
            .text(d => d.id);

        node.call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended));

        simulation.on('tick', () => {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            node
                .attr('cx', d => d.x)
                .attr('cy', d => d.y);
        });

        function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }

        function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }

    }


    const updateGraphWithSearchTerm = (term) => {
        d3.json('plot.json').then(data => {
            // Filter nodes based on the search term
            const filtered_nodes = data.nodes.filter(node =>
                node.id.toLowerCase().includes(term.toLowerCase())
            );

            const filtered_nodes_children = filtered_nodes.flatMap(node =>
                (node.children || []).map(child => child.toLowerCase())
            );


            const filtered_dataset = data.nodes.filter(node =>
                filtered_nodes_children.includes(node.id.toLowerCase())
            );



            const allNodes = [...filtered_nodes, ...filtered_dataset]

            const filteredNodeIds = new Set(allNodes.map(node => node.id.toLowerCase()));
            const filteredNodesArray = Array.from(filteredNodeIds, id => data.nodes.find(node => node.id.toLowerCase() === id));



            const filtered_node_ids = filteredNodesArray.map(node => node.id.toLowerCase());

            const newLinks = data.links.filter(link => filtered_node_ids.includes(link.source.toLowerCase()) && filtered_node_ids.includes(link.target.toLowerCase()))

            const newData = {
                nodes: filteredNodesArray,
                links: newLinks
            };

            const svg = d3.select(svgRef.current);

            const { width, height } = svg.node().getBoundingClientRect();

            initializeGraph(width, height, newData);

        })
    }


    return (
        <MagneticBig>
            <div className='w-full h-full lg:flex lg:flex-col hidden flex-col text-sm p-3 items-center shadow-2xl dark:shadow-none bg-slate-600 text-slate-100 dark:bg-neutral-900 dark:text-neutral-100 rounded-2xl font-light'>
                <div className=' w-full h-full  flex items-end justify-end '>

                    <div className='w-full ml-auto h-full flex  rounded-xl'>
                        <div className="  w-[22%] h-auto flex flex-col">
                            <div className=" ml-7 mt-7 h-auto w-[100%]">
                                <p onClick={() => updateGraphWithSearchTerm("experience")} className=' mx-1 px-1 py-1 my-1 text-xl font-semibold rounded-lg border border-neutral-200 text-neutral-200 dark:text-neutral-900'>about me</p>
                                <button onClick={() => updateGraphWithSearchTerm("experience")} className=' mx-1 px-1 py-1 border border-neutral-200 rounded-2xl my-1 hover:border-yellow-500 ease-in-out duration-200'>companies</button>
                                <button onClick={() => updateGraphWithSearchTerm("all courses")} className=' mx-1 px-1 py-1 border border-neutral-200 rounded-2xl my-1 hover:border-yellow-500 ease-in-out duration-200'>courses</button>
                                <button onClick={() => updateGraphWithSearchTerm("frameworks")} className=' mx-1 px-1 py-1 border border-neutral-200 rounded-2xl my-1 hover:border-yellow-500 ease-in-out duration-200'>frameworks</button>
                                <button onClick={() => updateGraphWithSearchTerm("graphical design")} className=' mx-1 px-1 py-1 border border-neutral-200 rounded-2xl my-1 hover:border-yellow-500 ease-in-out duration-200'>graphics</button>
                                <button onClick={() => updateGraphWithSearchTerm("skills")} className=' mx-1 px-1 py-1 border border-neutral-200 rounded-2xl my-1 hover:border-yellow-500 ease-in-out duration-200'>skills</button>
                                <button onClick={() => updateGraphWithSearchTerm("interests")} className=' mx-1 px-1 py-1 border border-neutral-200 rounded-2xl my-1 hover:border-yellow-500 ease-in-out duration-200'>interests</button>

                            </div>
                            <button onClick={() => {
                                updateGraphWithSearchTerm("")
                            }} className='  ml-7 mt-auto mr-auto px-2  flex flex-row border py-1 items-center rounded-lg hover:text-neutral-900 hover:bg-neutral-100 duration-200 ease-in-out'><FaFilter className=' text-md mr-2' /><p className=' mx-auto'>Restore filter</p></button>
                            <div className='info w-full h-[20vh] ml-7  border-neutral-100 flex p-2 '>
                                {nodeHover &&
                                    <div className=' flex flex-col h-full w-full mt-auto'>
                                        <p className=' my-auto tracking-widest'> Node: {nodeHover.id}</p>
                                        <p className=' my-auto '>{nodeHover.label}</p>
                                        <Link className=' my-auto ' href={nodeHover.link}><FaExternalLinkAlt className=' hover:opacity-50 ease-in-out duration-200' /></Link>
                                    </div>
                                }
                            </div>
                        </div>

                        <svg ref={svgRef} width="100%" height="100%"></svg>
                    </div>
                </div>
            </div>
        </MagneticBig>
    );
}



