import React, { useRef,useState} from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
    View,
    Dimensions,
    StyleSheet,
    Platform,
} from 'react-native';
import { useSelector} from "react-redux";
import { get as _get } from 'lodash';
const { width: screenWidth } = Dimensions.get('window');

const MyCarousel = props => {
    const slides = useSelector((state) => _get(state, "slide.slides", []));
    const carouselRef = useRef(null);
    const renderItem = ({ item, index }, parallaxProps) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.url }}
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
                data={slides}
                autoplay={true}
                autoplayInterval={8000}
                autoplayDelay={2000}
                vertical={false}
                loop={true}
                enableSnap={true}
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