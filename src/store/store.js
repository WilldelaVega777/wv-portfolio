//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import create                       from 'zustand'


//--------------------------------------------------------------
// Store Definition Section
//--------------------------------------------------------------
export const useStore = create((set) => ({
    dat : {
        posX : 0,
        posY : 0,
        posZ : 0
    },
    changeDat: (pDat) => {
        set(state => ({dat: pDat}))
    },
    diplomasContainer : undefined,
    setDiplomasContainer: (newRef) => set({diplomasContainer: newRef})
}))
