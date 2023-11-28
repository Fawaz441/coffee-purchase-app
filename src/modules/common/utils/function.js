import { Dimensions } from "react-native";


export const { width: screenWidth, height: screenHeight } = Dimensions.get("window")

export const getHitSlop = (number) => ({ top: number, left: number, right: number, bottom: number })



export const navigateToScreen = (navigateObj, screen, params = {}) => navigateObj.navigate(screen, params)


const DESIGN_HEIGHT = 854;
const DESIGN_WIDTH = 390;

/**
 * Gets the equivalent height using the device's dimensions to that on the design(Figma)
 * @param {number} itemDesignHeight
 * @returns number
 */
export const getRelHeight = (itemDesignHeight) => {
    const relHeight = (itemDesignHeight / DESIGN_HEIGHT) * screenHeight;
    return relHeight > itemDesignHeight ? itemDesignHeight : relHeight;
};


/**
 * Gets the equivalent with using the device's dimensions to that on the design(Figma)
 * @param {number} itemDesignWidth
 * @returns number
 */
export const getRelWidth = (itemDesignWidth) => {
    const relWidth = (itemDesignWidth / DESIGN_WIDTH) * screenWidth;
    return relWidth > itemDesignWidth ? itemDesignWidth : relWidth;
};