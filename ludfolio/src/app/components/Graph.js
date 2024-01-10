"use client"
import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { FaDownload, FaExternalLinkAlt, FaFilter, FaInfoCircle, FaSearch } from "react-icons/fa"
import gsap from 'gsap'
import Link from 'next/link'
import Image from 'next/image'
import { PiGraphThin } from "react-icons/pi";


export default function Home() {
    const svgRef = useRef(null);
    const [nodeHover, setNodeHover] = useState(null);
    const simulationRef = useRef(null);
    const inputRef = useRef("")

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const { width, height } = svg.node().getBoundingClientRect();
        d3.json('plot.json').then(data => {
            initializeGraph(width, height, data);
        })

    }, []);

    useEffect(() => {
        console.log(nodeHover);
    }, [nodeHover]); // This will run whenever nodeHover changes



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
                console.log("Node Data:", { id, label });
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

            console.log(newData)
            initializeGraph(width, height, newData);

        })
    }


    return (
        <div className='w-full h-screen xl:flex xl:flex-col hidden flex-col text-neutral-200 p-20 items-center'>
            <div className=' h-[15vh] flex flex-row border  items-center w-full mr-auto rounded-xl z-40'>
                <p className=' font-light mx-5 text-6xl font-rubik flex'> About Me <PiGraphThin className=' my-auto mx-2 text-6xl'/></p>
            </div>
            <div className=' w-full h-full z-40 flex items-end justify-end pt-10'>
                <div className=' font-poppins flex flex-col h-full w-[25%]'>
                    <div className=' w-[200px] h-[200px] relative rounded-full mx-auto mt-5 overflow-hidden'>
                        <Image src={"/assets/pb.jpeg"} alt='Loading' fill={true} objectFit='cover'/>
                    </div>
                    <p className=' mt-8 text-center text-3xl font-black mx-10 text-orange-500'>What's this&quest;</p>
                    <p className=' mt-8 text-center text-base font-light tracking-widest mx-10'>Here's a graph about me, take a look or search for a particular subject if you want to know something specific about me</p>
                    <p className=' mt-8 text-center text-base font-semibold tracking-wide mx-10 text-blue-500'>OR... Skip this goof and check out my CV</p>
                    <a className=' mx-auto border rounded-xl py-2 px-2 group font-regular tracking-wider mt-8 text-neutral-200 flex items-center hover:bg-neutral-200 hover:text-neutral-950 ease-in-out duration-150' href="/assets/CV_eng.pdf" download="your-portfolio.pdf" >Download Resume<FaDownload className=' mx-2' /></a>

                </div>
                <div className='w-[75%] ml-auto h-full flex border z-40 rounded-xl bg-slate-800'>
                    <div className="  w-[22%] h-full flex flex-col z-40">
                        <div className="group  ml-7 mt-7 flex h-10 justify-end rounded-3xl border border-neutral-200 items-center w-10 overflow-hidden hover:w-[100%] ease-in-out duration-500">
                            <FaSearch className=" absolute mr-[11px] group-hover:rotate-90 ease-in-out duration-500" />
                            <input
                                ref={inputRef}
                                onChange={(e) => {
                                    updateGraphWithSearchTerm(e.target.value);
                                }}
                                className=" bg-transparent outline-none  w-full px-5  text-neutral-200 opacity-0 group-hover:opacity-100 ease-in-out duration-200"
                                type="text"
                                placeholder="Anything particular?"
                            />
                        </div>
                        <button onClick={() => {
                            updateGraphWithSearchTerm("")
                            inputRef.current.value = ""
                        }} className=' mb-4 ml-7 mt-auto mr-auto pr-8 font-light text-sm flex flex-row border rounded-xl py-3 items-center hover:text-slate-800 hover:bg-neutral-200 duration-200 ease-in-out'><FaFilter className=' text-md mx-4' /><p className=' mx-auto'>Restore filter</p></button>
                        <div className=' mb-7 ml-7 font-extralight text-sm flex flex-row border rounded-xl mr-auto items-center p-1 '><FaInfoCircle className=' text-2xl mx-4' /><p>hover over nodes for more information&apos;</p></div>
                        <div className='info w-full h-[20vh] mb-7 ml-7 border border-neutral-200 rounded-xl flex p-2 text-neutral-200'>
                            {nodeHover &&
                                <div className=' flex flex-col w-full h-full'>
                                    <p className=' font-light tracking-widest'> Node: {nodeHover.id}</p>
                                    <p className=' font-light text-sm mt-3 text-neutral-400'>{nodeHover.label}</p>
                                    <Link className='ml-auto mt-auto mb-1 mr-1 text-xl' href={nodeHover.link}><FaExternalLinkAlt className=' text-red-400 hover:opacity-50 ease-in-out duration-200' /></Link>
                                </div>
                            }
                        </div>
                    </div>

                    <svg ref={svgRef} width="100%" height="100%"></svg>
                </div>
            </div>
        </div>
    );
}



