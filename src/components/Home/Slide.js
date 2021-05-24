import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
    View,
    Dimensions,
    StyleSheet,
    Platform,
} from 'react-native';

const ENTRIES1 = [
    {
        illustration: 'https://ueh.edu.vn/images/upload/thumbnail/ueh-thumbnail-103134-020520.png',
    },
    {
        illustration: 'https://phuxuyen.hanoi.gov.vn/documents/1071288/5150708/08032020anhvirut1.jpg/3e544e68-9d36-4910-8565-8627f4c179c4?t=1583983959480',
    },
    {
        illustration: 'https://file1.dangcongsan.vn/data/0/images/2020/07/30/tangndhcm/dsc3578-1.jpg?dpi=150&quality=100&w=680',
    },
];
const { width: screenWidth } = Dimensions.get('window');

const MyCarousel = props => {
    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);

    useEffect(() => {
        setEntries(ENTRIES1);
    }, []);

    const renderItem = ({ item, index }, parallaxProps) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.illustration }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                sliderWidth={screenWidth}
                sliderHeight={270}
                itemWidth={screenWidth - 60}
                data={entries}
                renderItem={renderItem}
                hasParallaxImages={true}
            />
        </View>
    );
};

export default MyCarousel;

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        height: 260,
    },
    item: {
        width: screenWidth - 60,
        height: 250,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'contain',
    },
});