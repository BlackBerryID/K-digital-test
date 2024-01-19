import { CButton } from '@coreui/react-pro'
import printJS from 'print-js'
import html2pdf from 'html2pdf.js'

interface SaveAndPrintButtonsProps {
  marginTop?: string
  elId: string
  elToPrintStyle?: string
  elementType?: 'html' | 'pdf'
  hiddenSectionId?: string
}

const SaveAndPrintButtons = ({
  marginTop,
  elId,
  elToPrintStyle = '',
  elementType,
  hiddenSectionId,
}: SaveAndPrintButtonsProps) => {
  const handleSave = () => {
    const element = document.getElementById(elId)
    const options = {
      margin: [2, 2],
      filename: `${elId}.pdf`,
      jsPDF: { unit: 'cm', format: 'letter', orientation: 'landscape' },
    }

    if (elementType === 'pdf') {
      options.margin = [1, 0]
    }

    if (!hiddenSectionId) {
      html2pdf().set(options).from(element).save()
    } else {
      const elementCopy = element?.cloneNode(true) as HTMLElement
      const targetEl = elementCopy.querySelector(
        `#${hiddenSectionId}`,
      ) as HTMLElement

      if (targetEl) {
        targetEl.style.display = 'block'
      }

      html2pdf().set(options).from(elementCopy).save()
    }
  }

  const handlePrint = () => {
    printJS({
      printable: elId,
      type: 'html',
      style: elToPrintStyle + `#${elId} {margin:0 !important}`,
      targetStyles: ['*'],
    })
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        gap: '34px',
        justifyContent: 'flex-end',
        marginTop,
      }}
    >
      <CButton
        style={{ backgroundColor: '#747DEA', maxWidth: '309px', width: '100%' }}
        onClick={handleSave}
      >
        Скачать
      </CButton>
      <CButton
        style={{
          backgroundColor: '#747DEA',
          maxWidth: '309px',
          width: '100%',
        }}
        onClick={handlePrint}
      >
        Печать
      </CButton>
    </div>
  )
}

export default SaveAndPrintButtons
