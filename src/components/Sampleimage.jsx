import React from 'react';
import ImageGallery from 'react-image-gallery';
import './styles/sampleimage.css';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => 
      images[item.replace('./', '')] = r(item)
    );
    return images;
  }
const images = importAll(require.context('./images/sample/', false, /\.(png|jpg|jpeg|svg)$/));

const image = [
    {
        original: images['1.jpeg'],
        thumbnail: images['1.jpeg']
    },
    {
        original: images['2.jpeg'],
        thumbnail: images['2.jpeg']
    },
    {
        original: images['3.jpeg'],
        thumbnail: images['3.jpeg']
    },
    {
        original: images['4.jpeg'],
        thumbnail: images['4.jpeg']
    },
    {
        original: images['5.jpeg'],
        thumbnail: images['5.jpeg']
    },
    {
        original: images['6.jpeg'],
        thumbnail: images['6.jpeg']
    },
    {
        original: images['7.jpeg'],
        thumbnail: images['7.jpeg']
    },
    {
        original: images['8.jpeg'],
        thumbnail: images['8.jpeg']
    },
    {
        original: images['9.jpeg'],
        thumbnail: images['9.jpeg']
    },
    {
        original: images['10.jpeg'],
        thumbnail: images['10.jpeg']
    },
    {
        original: images['11.jpeg'],
        thumbnail: images['11.jpeg']
    },
    {
        original: images['12.jpeg'],
        thumbnail: images['12.jpeg']
    },
    {
        original: images['13.jpeg'],
        thumbnail: images['13.jpeg']
    },
    {
        original: images['14.jpeg'],
        thumbnail: images['14.jpeg']
    },
    {
        original: images['15.jpeg'],
        thumbnail: images['15.jpeg']
    },
    {
        original: images['16.jpeg'],
        thumbnail: images['16.jpeg']
    },
    {
        original: images['18.jpeg'],
        thumbnail: images['18.jpeg']
    },
]

export default function Sampleimage() {
    return (
        <section className="sampleimage">
            <div className="sampleimage-intro">
                <h2 className="sampleimage-title">Sample Image</h2>
            </div>
            <div className="sampleimage-container">
                <ImageGallery 
                    className="image-gallery-slide"
                    showThumbnails={true}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    items={image} 
                    />
            </div>
        </section>
    )
}