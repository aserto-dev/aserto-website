import { useEffect } from 'react'
import gsap from 'gsap'
import { DURATION } from 'lib/gsap'

// import { GSDevTools } from 'gsap/GSDevTools'

// gsap.registerPlugin(GSDevTools)

const Animation = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      paused: true,
      smoothChildTiming: true,
      repeat: -1,
      repeatDelay: DURATION
    })

    const bubbles = gsap.utils.toArray('#bubbles > g')
    const filters = gsap.utils.toArray('[data-filter] feGaussianBlur')
    const filtersMatrix = gsap.utils.toArray(
      '[data-filter] > feColorMatrix:first-of-type'
    )
    const arrows = gsap.utils.toArray('[data-arrow]')

    timeline.set(
      [bubbles, arrows, '#decision', '#user', '#policy', '#authorization'],
      {
        autoAlpha: 0
      }
    )
    timeline.set(filters, {
      attr: {
        stdDeviation: 0
      }
    })
    timeline.set(filtersMatrix, {
      attr: {
        in: 'FillPaint'
      }
    })

    timeline.addLabel('start-sequence-1')
    timeline.to('#githubBG', {
      delay: DURATION,
      fill: '#3364AE'
    })
    timeline.to(
      '#githubLogo',
      {
        fill: '#E7E7E7'
      },
      '<'
    )
    timeline.to(
      '#githubBorder',
      {
        fill: '#4990FA'
      },
      '<'
    )
    timeline.to(
      '#filter12_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 6
        }
      },
      '<'
    )
    timeline.set(
      '#filter12_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.addLabel('end-sequence-1')
    timeline.addLabel('start-sequence-2')
    timeline.set('#bubble3', {
      yPercent: 380,
      autoAlpha: 1
    })
    timeline.to(
      '#filter3_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 6
        }
      },
      '<'
    )
    timeline.set(
      '#filter3_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.to(
      '#bubble3',
      {
        yPercent: -380,
        duration: DURATION * 2
      },
      '<'
    )
    timeline.to(
      '#backgroundBG',
      {
        fill: '#237477'
      },
      '<'
    )
    timeline.to(
      '#backgroundStroke',
      {
        stroke: '#237477'
      },
      '<'
    )
    timeline.addLabel('end-sequence-2')
    timeline.addLabel('start-sequence-3')
    timeline.to(
      '#githubBG',
      {
        fill: '#121212'
      },
      '<'
    )
    timeline.to(
      '#githubLogo',
      {
        fill: '#A0A0A0'
      },
      '<'
    )
    timeline.to(
      '#githubBorder',
      {
        fill: '#3364AE'
      },
      '<'
    )
    timeline.to(
      '#filter12_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 0
        }
      },
      '<'
    )
    timeline.set(
      '#filter12_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'FillPaint'
        }
      },
      '<'
    )
    timeline.addLabel('end-sequence-3')
    timeline.addLabel('start-sequence-4')
    timeline.to('#policy', {
      ease: 'back.out(1)',
      autoAlpha: 1
    })
    timeline.to(
      '#filterPolicy feGaussianBlur',
      {
        attr: {
          stdDeviation: 8
        }
      },
      '<'
    )
    timeline.set(
      '#filterPolicy > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.addLabel('end-sequence-4')
    timeline.addLabel('start-sequence-5')
    timeline.set(['#bubble1', '#bubble2'], {
      yPercent: 380,
      autoAlpha: 1
    })
    timeline.to(
      ['#filter1_d feGaussianBlur', '#filter2_d feGaussianBlur'],
      {
        attr: {
          stdDeviation: 6
        }
      },
      '<'
    )
    timeline.set(
      [
        '#filter1_d > feColorMatrix:first-of-type',
        '#filter2_d > feColorMatrix:first-of-type'
      ],
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.to(
      ['#bubble1', '#bubble2'],
      {
        duration: DURATION * 2,
        yPercent: -380
      },
      '<'
    )
    timeline.addLabel('end-sequence-5')
    timeline.addLabel('start-sequence-6')
    timeline.to(
      ['#sidecarFilter1 feGaussianBlur', '#sidecarFilter2 feGaussianBlur'],
      {
        attr: {
          stdDeviation: 4
        }
      },
      '<'
    )
    timeline.set(
      [
        '#sidecarFilter1 > feColorMatrix:first-of-type',
        '#sidecarFilter2 > feColorMatrix:first-of-type'
      ],
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.to('#policy', {
      autoAlpha: 0
    })
    timeline.to(
      ['#sidecar1 .bg', '#sidecar2 .bg'],
      {
        fill: '#277F82'
      },
      '<'
    )
    timeline.to(
      '#backgroundBG',
      {
        fill: '#1C484A'
      },
      '<'
    )
    timeline.to(
      '#backgroundStroke',
      {
        stroke: '#215E60'
      },
      '<'
    )
    timeline.addLabel('end-sequence-6')
    timeline.addLabel('start-sequence-7')
    timeline.to(
      ['#sidecarFilter1 feGaussianBlur', '#sidecarFilter2 feGaussianBlur'],
      {
        delay: DURATION,
        attr: {
          stdDeviation: 0
        }
      }
    )
    timeline.set(
      [
        '#sidecarFilter1 > feColorMatrix:first-of-type',
        '#sidecarFilter2 > feColorMatrix:first-of-type'
      ],
      {
        attr: {
          in: 'FillPaint'
        }
      },
      '<'
    )
    timeline.to(
      ['#sidecar1 .bg', '#sidecar2 .bg'],
      {
        fill: '#1C484A'
      },
      '<'
    )
    timeline.addLabel('end-sequence-7')
    timeline.addLabel('start-sequence-8')
    timeline.to(
      '#providerBg',
      {
        delay: 2,
        fill: '#0E1F38'
      },
      '<'
    )
    timeline.to(
      '#provider .text',
      {
        fill: '#4b92ff'
      },
      '<'
    )
    timeline.to(
      '#providerBorder',
      {
        stroke: '#4b92ff'
      },
      '<'
    )
    timeline.to(
      '#filter11_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 6
        }
      },
      '<'
    )
    timeline.set(
      '#filter11_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.set(
      '#bubble4',
      {
        yPercent: 380,
        autoAlpha: 1
      },
      '<.3'
    )
    timeline.to(
      '#filter2_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 6
        }
      },
      '<'
    )
    timeline.set(
      '#filter2_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.to(
      '#bubble4',
      {
        yPercent: -380,
        duration: DURATION * 2
      },
      '<'
    )
    timeline.addLabel('end-sequence-8')
    timeline.addLabel('start-sequence-9')
    timeline.to(
      '#backgroundBG',
      {
        fill: '#237477'
      },
      '<'
    )
    timeline.to(
      '#backgroundStroke',
      {
        stroke: '#237477'
      },
      '<'
    )
    timeline.to('#providerBg', {
      fill: '#121212'
    })
    timeline.to(
      '#provider .text',
      {
        fill: '#3364AE'
      },
      '<'
    )
    timeline.to(
      '#providerBorder',
      {
        stroke: '#3364AE'
      },
      '<'
    )
    timeline.to(
      '#filter11_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 0
        }
      },
      '<'
    )
    timeline.set(
      '#filter11_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'FillPaint'
        }
      },
      '<'
    )
    timeline.addLabel('end-sequence-9')
    timeline.addLabel('start-sequence-10')
    timeline.to(
      '#directoryBg',
      {
        fill: '#0E1F38'
      },
      '<.3'
    )
    timeline.to(
      '#directory .text',
      {
        fill: '#4b92ff'
      },
      '<'
    )
    timeline.to(
      '#directoryBorder',
      {
        stroke: '#4b92ff'
      },
      '<'
    )
    timeline.to(
      '#filter13_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 6
        }
      },
      '<'
    )
    timeline.set(
      '#filter13_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.set(
      '#bubble5',
      {
        yPercent: 380,
        autoAlpha: 1
      },
      '<.3'
    )
    timeline.to(
      '#filter4_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 6
        }
      },
      '<'
    )
    timeline.set(
      '#filter4_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.to(
      '#bubble5',
      {
        yPercent: -380,
        duration: DURATION * 2
      },
      '<'
    )
    timeline.to(
      '#directoryBg',
      {
        fill: '#121212'
      },
      '<'
    )
    timeline.to(
      '#directory .text',
      {
        fill: '#3364AE'
      },
      '<'
    )
    timeline.to(
      '#directoryBorder',
      {
        stroke: '#3364AE'
      },
      '<'
    )
    timeline.to(
      '#filter13_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 0
        }
      },
      '<'
    )
    timeline.set(
      '#filter13_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'FillPaint'
        }
      },
      '<'
    )
    timeline.addLabel('end-sequence-10')
    timeline.addLabel('start-sequence-11')
    timeline.to(
      '#systemBg',
      {
        fill: '#0E1F38'
      },
      '<.3'
    )
    timeline.to(
      '#system .text',
      {
        fill: '#4b92ff'
      },
      '<'
    )
    timeline.to(
      '#systemBorder',
      {
        stroke: '#4b92ff'
      },
      '<'
    )
    timeline.to(
      '#filter14_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 6
        }
      },
      '<'
    )
    timeline.set(
      '#filter14_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.set(
      '#bubble6',
      {
        yPercent: 380,
        autoAlpha: 1
      },
      '<.3'
    )
    timeline.to(
      '#filter5_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 6
        }
      },
      '<'
    )
    timeline.set(
      '#filter5_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.to(
      '#bubble6',
      {
        yPercent: -380,
        duration: DURATION * 2
      },
      '<'
    )
    timeline.to('#systemBg', {
      fill: '#121212'
    })
    timeline.to(
      '#system .text',
      {
        fill: '#3364AE'
      },
      '<'
    )
    timeline.to(
      '#systemBorder',
      {
        stroke: '#3364AE'
      },
      '<'
    )
    timeline.to(
      '#filter14_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 0
        }
      },
      '<'
    )
    timeline.set(
      '#filter14_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'FillPaint'
        }
      },
      '<'
    )
    timeline.addLabel('end-sequence-11')
    timeline.addLabel('start-sequence-12')
    timeline.to('#user', {
      ease: 'back.out(1)',
      autoAlpha: 1
    })
    timeline.to(
      '#filterPolicy feGaussianBlur',
      {
        attr: {
          stdDeviation: 8
        }
      },
      '<'
    )
    timeline.set(
      '#filterPolicy > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.addLabel('end-sequence-12')
    timeline.addLabel('start-sequence-13')
    timeline.set(['#bubble1', '#bubble2'], {
      yPercent: 380,
      autoAlpha: 1
    })
    timeline.to(
      ['#filter1_d feGaussianBlur', '#filter2_d feGaussianBlur'],
      {
        attr: {
          stdDeviation: 6
        }
      },
      '<'
    )
    timeline.set(
      [
        '#filter1_d > feColorMatrix:first-of-type',
        '#filter2_d > feColorMatrix:first-of-type'
      ],
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.to(
      ['#bubble1', '#bubble2'],
      {
        yPercent: -380,
        duration: DURATION * 2
      },
      '<'
    )
    timeline.addLabel('end-sequence-13')
    timeline.addLabel('start-sequence-14')
    timeline.to(
      ['#sidecarFilter1 feGaussianBlur', '#sidecarFilter2 feGaussianBlur'],
      {
        attr: {
          stdDeviation: 4
        }
      },
      '<'
    )
    timeline.set(
      [
        '#sidecarFilter1 > feColorMatrix:first-of-type',
        '#sidecarFilter2 > feColorMatrix:first-of-type'
      ],
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.to('#user', {
      autoAlpha: 0
    })
    timeline.to(
      ['#sidecar1 .bg', '#sidecar2 .bg'],
      {
        fill: '#277F82'
      },
      '<'
    )
    timeline.to(
      '#backgroundBG',
      {
        fill: '#1C484A'
      },
      '<'
    )
    timeline.to(
      '#backgroundStroke',
      {
        stroke: '#215E60'
      },
      '<'
    )
    timeline.to(['#sidecar1 .bg', '#sidecar2 .bg'], {
      fill: '#1C484A'
    })
    timeline.addLabel('end-sequence-14')
    timeline.addLabel('start-sequence-15')
    timeline.to('#reactBg', {
      delay: 2,
      fill: '#1B283D'
    })
    timeline.to(
      '#react .text',
      {
        fill: '#4187FF'
      },
      '<'
    )
    timeline.to(
      '#reactBorder',
      {
        stroke: '#4187FF'
      },
      '<'
    )
    timeline.to(
      '#filter8_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 5
        }
      },
      '<'
    )
    timeline.set(
      '#filter8_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.addLabel('end-sequence-15')
    timeline.addLabel('start-sequence-16')
    timeline.to('#arrow1', {
      startAt: {
        xPercent: -20
      },
      ease: 'back.out(1)',
      xPercent: 0,
      autoAlpha: 1,
      duration: DURATION * 2
    })
    timeline.to(
      '#apiBG',
      {
        fill: '#1B283D',
        stroke: '#4187FF'
      },
      '<'
    )
    timeline.to(
      '#api .text',
      {
        fill: '#4187FF'
      },
      '<'
    )
    timeline.to(
      '#filter9_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 5
        }
      },
      '<'
    )
    timeline.set(
      '#filter9_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.to('#reactBg', {
      delay: DURATION,
      fill: '#121212'
    })
    timeline.to(
      '#react .text',
      {
        fill: '#3364AE'
      },
      '<'
    )
    timeline.to(
      '#reactBorder',
      {
        stroke: '#3364AE'
      },
      '<'
    )
    timeline.to(
      '#filter8_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 0
        }
      },
      '<'
    )
    timeline.set(
      '#filter8_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'FillPaint'
        }
      },
      '<'
    )
    timeline.addLabel('end-sequence-16')
    timeline.addLabel('start-sequence-17')
    timeline.to('#sidecar1 .bg', {
      fill: '#277F82'
    })
    timeline.to('#sidecar1 .bg', {
      fill: '#1C484A'
    })
    timeline.to(
      '#arrow3',
      {
        startAt: {
          xPercent: -20
        },
        ease: 'back.out(1)',
        xPercent: 0,
        autoAlpha: 1,
        duration: DURATION * 2
      },
      '<'
    )
    timeline.to(
      '#apiBG',
      {
        fill: '#121212',
        stroke: '#3364AE'
      },
      '<'
    )
    timeline.to(
      '#api .text',
      {
        fill: '#3364AE'
      },
      '<'
    )
    timeline.to(
      '#filter9_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 0
        }
      },
      '<'
    )
    timeline.set(
      '#filter9_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'FillPaint'
        }
      },
      '<'
    )
    timeline.addLabel('end-sequence-17')
    timeline.addLabel('start-sequence-18')
    timeline.to(
      '#api2Bg',
      {
        fill: '#1B283D'
      },
      '<'
    )
    timeline.to(
      '#api2 .text',
      {
        fill: '#4187FF'
      },
      '<'
    )
    timeline.to(
      '#api2Border',
      {
        stroke: '#4187FF'
      },
      '<'
    )
    timeline.to(
      '#filter10_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 5
        }
      },
      '<'
    )
    timeline.set(
      '#filter10_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.to('#sidecar2 .bg', {
      fill: '#277F82'
    })
    timeline.to(
      '#api2Bg',
      {
        fill: '#121212'
      },
      '<'
    )
    timeline.to(
      '#api2 .text',
      {
        fill: '#3364AE'
      },
      '<'
    )
    timeline.to(
      '#api2Border',
      {
        stroke: '#3364AE'
      },
      '<'
    )
    timeline.to(
      '#filter10_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 0
        }
      },
      '<'
    )
    timeline.set(
      '#filter10_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'FillPaint'
        }
      },
      '<'
    )
    timeline.to('#sidecar2 .bg', {
      fill: '#1C484A'
    })
    timeline.addLabel('end-sequence-18')
    timeline.addLabel('start-sequence-19')
    timeline.to('#arrow4', {
      startAt: {
        xPercent: 20
      },
      ease: 'back.out(1)',
      xPercent: 0,
      autoAlpha: 1,
      duration: DURATION * 2
    })
    timeline.to('#arrow2', {
      startAt: {
        xPercent: 20
      },
      ease: 'back.out(1)',
      xPercent: 0,
      autoAlpha: 1,
      duration: DURATION * 2
    })
    timeline.to(
      '#reactBg',
      {
        fill: '#1B283D'
      },
      '<'
    )
    timeline.to(
      '#react .text',
      {
        fill: '#4187FF'
      },
      '<'
    )
    timeline.to(
      '#reactBorder',
      {
        stroke: '#4187FF'
      },
      '<'
    )
    timeline.to(
      '#filter8_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 5
        }
      },
      '<'
    )
    timeline.set(
      '#filter8_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.to('#reactBg', {
      fill: '#121212'
    })
    timeline.to(
      '#react .text',
      {
        fill: '#3364AE'
      },
      '<'
    )
    timeline.to(
      '#reactBorder',
      {
        stroke: '#3364AE'
      },
      '<'
    )
    timeline.to(
      '#filter8_d feGaussianBlur',
      {
        attr: {
          stdDeviation: 0
        }
      },
      '<'
    )
    timeline.set(
      '#filter8_d > feColorMatrix:first-of-type',
      {
        attr: {
          in: 'FillPaint'
        }
      },
      '<'
    )
    timeline.addLabel('end-sequence-19')
    timeline.addLabel('start-sequence-20')
    timeline.to(
      ['#sidecarFilter1 feGaussianBlur', '#sidecarFilter2 feGaussianBlur'],
      {
        attr: {
          stdDeviation: 4
        }
      }
    )
    timeline.set(
      [
        '#sidecarFilter1 > feColorMatrix:first-of-type',
        '#sidecarFilter2 > feColorMatrix:first-of-type'
      ],
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.to(
      ['#sidecar1 .bg', '#sidecar2 .bg'],
      {
        fill: '#277F82'
      },
      '<'
    )
    timeline.set(['#bubble1', '#bubble2'], {
      yPercent: -380,
      autoAlpha: 1
    })
    timeline.to(
      ['#filter1_d feGaussianBlur', '#filter2_d feGaussianBlur'],
      {
        attr: {
          stdDeviation: 6
        }
      },
      '<'
    )
    timeline.set(
      [
        '#filter1_d > feColorMatrix:first-of-type',
        '#filter2_d > feColorMatrix:first-of-type'
      ],
      {
        attr: {
          in: 'SourceAlpha'
        }
      },
      '<'
    )
    timeline.to(
      ['#bubble1', '#bubble2'],
      {
        yPercent: 380,
        duration: DURATION * 2
      },
      '<'
    )
    timeline.to(
      ['#sidecarFilter1 feGaussianBlur', '#sidecarFilter2 feGaussianBlur'],
      {
        attr: {
          stdDeviation: 4
        }
      },
      '<'
    )
    timeline.set(
      [
        '#sidecarFilter1 > feColorMatrix:first-of-type',
        '#sidecarFilter2 > feColorMatrix:first-of-type'
      ],
      {
        attr: {
          in: 'FillPaint'
        }
      },
      '<'
    )
    timeline.to(
      ['#sidecar1 .bg', '#sidecar2 .bg'],
      {
        fill: '#1C484A'
      },
      '<'
    )
    timeline.to(
      '#backgroundBG',
      {
        fill: '#237477'
      },
      '<'
    )
    timeline.to(
      '#backgroundStroke',
      {
        stroke: '#237477'
      },
      '<'
    )
    timeline.to('#decision', {
      autoAlpha: 1
    })
    timeline.to('#backgroundBG', {
      fill: '#1C484A'
    })
    timeline.to(
      '#backgroundStroke',
      {
        stroke: '#215E60'
      },
      '<'
    )
    timeline.to(
      '#decision',
      {
        autoAlpha: 0
      },
      '<'
    )
    timeline.to(['#arrow1', '#arrow2', '#arrow3', '#arrow4'], {
      autoAlpha: 0,
      duration: DURATION * 2
    })
    timeline.addLabel('end-sequence-20')

    timeline.timeScale(0.8).play()

    // GSDevTools.create({ animation: timeline, timeScale: 0.8 })
  }, [])

  return (
    <svg
      className="relative z-10 w-full max-w-4xl mx-auto"
      viewBox="0 0 910 650"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Lines">
        <path id="Vector" d="M752 143H749V312H752V143Z" fill="#3364AE" />
        <path id="Vector_2" d="M454 143H451V312H454V143Z" fill="#3364AE" />
        <path id="Vector_3" d="M342 343H339V512H342V343Z" fill="#3364AE" />
        <path id="Vector_4" d="M115 341H113V512H115V341Z" fill="#3364AE" />
        <path id="Vector_5" d="M569 343H566V502H569V343Z" fill="#3364AE" />
        <path id="Vector_6" d="M797 343H795V502H797V343Z" fill="#3364AE" />
      </g>
      <g id="bubbles">
        <g id="bubble1" filter="url(#filter1_d)">
          <path
            id="Vector_9"
            d="M452 195C456.418 195 460 191.418 460 187C460 182.582 456.418 179 452 179C447.582 179 444 182.582 444 187C444 191.418 447.582 195 452 195Z"
            fill="#E7E7E7"
          />
          <path
            id="Vector_10"
            d="M452 195C456.418 195 460 191.418 460 187C460 182.582 456.418 179 452 179C447.582 179 444 182.582 444 187C444 191.418 447.582 195 452 195Z"
            stroke="#E7E7E7"
            strokeWidth="0.75"
          />
        </g>
        <g id="bubble2" filter="url(#filter0_d)">
          <path
            id="Vector_7"
            d="M750.5 195C755.194 195 759 191.418 759 187C759 182.582 755.194 179 750.5 179C745.806 179 742 182.582 742 187C742 191.418 745.806 195 750.5 195Z"
            fill="#E7E7E7"
          />
          <path
            id="Vector_8"
            d="M750.5 195C755.194 195 759 191.418 759 187C759 182.582 755.194 179 750.5 179C745.806 179 742 182.582 742 187C742 191.418 745.806 195 750.5 195Z"
            stroke="#E7E7E7"
            strokeWidth="0.75"
          />
        </g>
        <g id="bubble3" filter="url(#filter3_d)">
          <path
            id="Vector_13"
            d="M114 412C118.418 412 122 408.418 122 404C122 399.582 118.418 396 114 396C109.582 396 106 399.582 106 404C106 408.418 109.582 412 114 412Z"
            fill="#E7E7E7"
          />
          <path
            id="Vector_14"
            d="M114 412C118.418 412 122 408.418 122 404C122 399.582 118.418 396 114 396C109.582 396 106 399.582 106 404C106 408.418 109.582 412 114 412Z"
            stroke="#E7E7E7"
            strokeWidth="0.75"
          />
        </g>
        <g id="bubble4" filter="url(#filter2_d)">
          <path
            id="Vector_11"
            d="M341 412C345.418 412 349 408.418 349 404C349 399.582 345.418 396 341 396C336.582 396 333 399.582 333 404C333 408.418 336.582 412 341 412Z"
            fill="#E7E7E7"
          />
          <path
            id="Vector_12"
            d="M341 412C345.418 412 349 408.418 349 404C349 399.582 345.418 396 341 396C336.582 396 333 399.582 333 404C333 408.418 336.582 412 341 412Z"
            stroke="#E7E7E7"
            strokeWidth="0.75"
          />
        </g>
        <g id="bubble5" filter="url(#filter4_d)">
          <path
            id="Vector_15"
            d="M568 412C572.418 412 576 408.418 576 404C576 399.582 572.418 396 568 396C563.582 396 560 399.582 560 404C560 408.418 563.582 412 568 412Z"
            fill="#E7E7E7"
          />
          <path
            id="Vector_16"
            d="M568 412C572.418 412 576 408.418 576 404C576 399.582 572.418 396 568 396C563.582 396 560 399.582 560 404C560 408.418 563.582 412 568 412Z"
            stroke="#E7E7E7"
            strokeWidth="0.75"
          />
        </g>
        <g id="bubble6" filter="url(#filter5_d)">
          <path
            id="Vector_17"
            d="M796 412C800.418 412 804 408.418 804 404C804 399.582 800.418 396 796 396C791.582 396 788 399.582 788 404C788 408.418 791.582 412 796 412Z"
            fill="#E7E7E7"
          />
          <path
            id="Vector_18"
            d="M796 412C800.418 412 804 408.418 804 404C804 399.582 800.418 396 796 396C791.582 396 788 399.582 788 404C788 408.418 791.582 412 796 412Z"
            stroke="#E7E7E7"
            strokeWidth="0.75"
          />
        </g>
      </g>
      <g id="sidecar2" filter="url(#sidecarFilter2)">
        <path
          className="bg"
          d="M644 113.5C644 112.423 644 111.345 644.18 110.268C644.359 109.191 644.359 108.113 644.719 107.215C645.078 106.318 645.258 105.24 645.438 104.163C645.797 103.086 646.156 102.188 646.516 101.11C646.875 100.213 647.414 99.1353 647.953 98.2375C648.493 97.3397 649.032 96.442 649.571 95.5442C650.11 94.6464 650.829 93.7486 651.547 93.0304C652.266 92.1326 652.985 91.4144 653.704 90.6961C654.423 89.9779 655.321 89.2596 656.04 88.5414C656.938 87.8232 657.657 87.2845 658.556 86.5663C659.454 86.0276 660.353 85.4889 661.251 84.9502C662.15 84.4116 663.228 84.0525 664.126 83.5138C665.025 82.9751 666.103 82.7956 667.181 82.4364C668.26 82.0773 669.158 81.8978 670.236 81.7182C671.314 81.5387 672.393 81.3591 673.291 81.1795C674.369 81 675.448 81 676.526 81H827.474C828.552 81 829.631 81 830.709 81.1795C831.787 81.3591 832.865 81.3591 833.764 81.7182C834.842 81.8978 835.74 82.2569 836.819 82.4364C837.897 82.616 838.795 83.1547 839.874 83.5138C840.772 83.8729 841.85 84.4116 842.749 84.9502C843.647 85.4889 844.546 86.0276 845.444 86.5663C846.343 87.1049 847.241 87.8232 847.96 88.5414C848.859 89.2596 849.577 89.9779 850.296 90.6961C851.015 91.4144 851.734 92.3121 852.453 93.0304C853.171 93.9282 853.71 94.6464 854.429 95.5442C854.968 96.442 855.507 97.3397 856.047 98.2375C856.586 99.1353 856.945 100.213 857.484 101.11C857.844 102.008 858.203 103.086 858.562 104.163C858.922 105.24 859.101 106.138 859.281 107.215C859.461 108.293 859.641 109.37 859.82 110.268C860 111.345 860 112.423 860 113.5C860 114.577 860 115.655 859.82 116.732C859.641 117.809 859.641 118.887 859.281 119.785C859.101 120.862 858.742 121.76 858.562 122.837C858.203 123.914 857.844 124.812 857.484 125.89C857.125 126.787 856.586 127.865 856.047 128.762C855.507 129.66 854.968 130.558 854.429 131.456C853.89 132.354 853.171 133.251 852.453 133.97C851.734 134.688 851.015 135.586 850.296 136.304C849.577 137.022 848.679 137.74 847.96 138.459C847.062 139.177 846.343 139.715 845.444 140.434C844.546 140.972 843.647 141.511 842.749 142.05C841.85 142.588 840.772 142.948 839.874 143.486C838.975 143.845 837.897 144.204 836.819 144.564C835.74 144.923 834.842 145.102 833.764 145.282C832.685 145.461 831.607 145.641 830.709 145.82C829.631 146 828.552 146 827.474 146H676.526C675.448 146 674.369 146 673.291 145.82C672.213 145.641 671.135 145.641 670.236 145.282C669.158 145.102 668.26 144.743 667.181 144.564C666.103 144.204 665.205 143.845 664.126 143.486C663.228 143.127 662.15 142.588 661.251 142.05C660.353 141.511 659.454 140.972 658.556 140.434C657.657 139.895 656.759 139.177 656.04 138.459C655.141 137.74 654.423 137.022 653.704 136.304C652.985 135.586 652.266 134.688 651.547 133.97C650.829 133.251 650.29 132.354 649.571 131.456C649.032 130.558 648.493 129.66 647.953 128.762C647.414 127.865 647.055 126.787 646.516 125.89C646.156 124.992 645.797 123.914 645.438 122.837C645.078 121.76 644.898 120.862 644.719 119.785C644.539 118.707 644.359 117.63 644.18 116.732C644 115.834 644 114.398 644 113.5Z"
          fill="#1C484A"
        />
        <path
          id="Vector_20"
          d="M644 113.5C644 112.423 644 111.345 644.18 110.268C644.359 109.191 644.359 108.113 644.719 107.215C645.078 106.318 645.258 105.24 645.438 104.163C645.797 103.086 646.156 102.188 646.516 101.11C646.875 100.213 647.414 99.1353 647.953 98.2375C648.493 97.3397 649.032 96.442 649.571 95.5442C650.11 94.6464 650.829 93.7486 651.547 93.0304C652.266 92.1326 652.985 91.4144 653.704 90.6961C654.423 89.9779 655.321 89.2596 656.04 88.5414C656.938 87.8232 657.657 87.2845 658.556 86.5663C659.454 86.0276 660.353 85.4889 661.251 84.9502C662.15 84.4116 663.228 84.0525 664.126 83.5138C665.025 82.9751 666.103 82.7956 667.181 82.4364C668.26 82.0773 669.158 81.8978 670.236 81.7182C671.314 81.5387 672.393 81.3591 673.291 81.1795C674.369 81 675.448 81 676.526 81H827.474C828.552 81 829.631 81 830.709 81.1795C831.787 81.3591 832.865 81.3591 833.764 81.7182C834.842 81.8978 835.74 82.2569 836.819 82.4364C837.897 82.616 838.795 83.1547 839.874 83.5138C840.772 83.8729 841.85 84.4116 842.749 84.9502C843.647 85.4889 844.546 86.0276 845.444 86.5663C846.343 87.1049 847.241 87.8232 847.96 88.5414C848.859 89.2596 849.577 89.9779 850.296 90.6961C851.015 91.4144 851.734 92.3121 852.453 93.0304C853.171 93.9282 853.71 94.6464 854.429 95.5442C854.968 96.442 855.507 97.3397 856.047 98.2375C856.586 99.1353 856.945 100.213 857.484 101.11C857.844 102.008 858.203 103.086 858.562 104.163C858.922 105.24 859.101 106.138 859.281 107.215C859.461 108.293 859.641 109.37 859.82 110.268C860 111.345 860 112.423 860 113.5C860 114.577 860 115.655 859.82 116.732C859.641 117.809 859.641 118.887 859.281 119.785C859.101 120.862 858.742 121.76 858.562 122.837C858.203 123.914 857.844 124.812 857.484 125.89C857.125 126.787 856.586 127.865 856.047 128.762C855.507 129.66 854.968 130.558 854.429 131.456C853.89 132.354 853.171 133.251 852.453 133.97C851.734 134.688 851.015 135.586 850.296 136.304C849.577 137.022 848.679 137.74 847.96 138.459C847.062 139.177 846.343 139.715 845.444 140.434C844.546 140.972 843.647 141.511 842.749 142.05C841.85 142.588 840.772 142.948 839.874 143.486C838.975 143.845 837.897 144.204 836.819 144.564C835.74 144.923 834.842 145.102 833.764 145.282C832.685 145.461 831.607 145.641 830.709 145.82C829.631 146 828.552 146 827.474 146H676.526C675.448 146 674.369 146 673.291 145.82C672.213 145.641 671.135 145.641 670.236 145.282C669.158 145.102 668.26 144.743 667.181 144.564C666.103 144.204 665.205 143.845 664.126 143.486C663.228 143.127 662.15 142.588 661.251 142.05C660.353 141.511 659.454 140.972 658.556 140.434C657.657 139.895 656.759 139.177 656.04 138.459C655.141 137.74 654.423 137.022 653.704 136.304C652.985 135.586 652.266 134.688 651.547 133.97C650.829 133.251 650.29 132.354 649.571 131.456C649.032 130.558 648.493 129.66 647.953 128.762C647.414 127.865 647.055 126.787 646.516 125.89C646.156 124.992 645.797 123.914 645.438 122.837C645.078 121.76 644.898 120.862 644.719 119.785C644.539 118.707 644.359 117.63 644.18 116.732C644 115.834 644 114.398 644 113.5Z"
          stroke="#215E60"
          strokeWidth="1.5"
        />
        <path
          id="Vector_21"
          d="M691.837 118.337H685.935L684.683 121.826H682L687.724 107H690.049L695.772 121.826H693.089L691.837 118.337ZM686.65 116.244H691.122L688.976 110.14L686.65 116.244ZM703.821 118.686C703.821 118.163 703.642 117.988 703.285 117.64C702.927 117.465 702.211 117.291 701.496 116.942C700.602 116.767 699.886 116.593 699.35 116.244C698.098 115.721 697.382 114.849 697.382 113.628C697.382 112.756 697.74 111.884 698.634 111.186C699.528 110.488 700.423 110.14 701.854 110.14C703.285 110.14 704.358 110.488 705.073 111.186C705.967 111.884 706.325 112.756 706.325 113.802H703.821C703.821 113.279 703.642 112.93 703.285 112.581C702.927 112.233 702.39 112.058 701.854 112.058C701.317 112.058 700.78 112.233 700.423 112.407C700.065 112.581 699.886 112.93 699.886 113.454C699.886 113.802 700.065 114.151 700.423 114.326C700.78 114.5 701.496 114.674 702.39 115.023C703.463 115.198 704.179 115.547 704.715 115.721C705.252 116.07 705.789 116.419 705.967 116.767C706.325 117.116 706.325 117.64 706.325 118.337C706.325 119.384 705.967 120.081 705.073 120.779C704.179 121.477 703.106 121.651 701.675 121.651C700.781 121.651 699.886 121.477 699.171 121.128C698.455 120.779 697.919 120.43 697.561 119.733C697.203 119.209 697.024 118.512 697.024 117.814H699.528C699.528 118.337 699.707 118.86 700.244 119.209C700.781 119.558 701.138 119.733 701.854 119.733C702.569 119.733 703.106 119.558 703.463 119.384C703.642 119.384 703.821 119.209 703.821 118.686ZM713.48 122C711.87 122 710.618 121.477 709.545 120.43C708.472 119.384 708.114 118.163 708.114 116.419V116.07C708.114 115.023 708.293 113.977 708.829 113.105C709.187 112.233 709.902 111.535 710.618 111.012C711.333 110.488 712.228 110.314 713.301 110.314C714.911 110.314 715.984 110.837 716.878 111.709C717.772 112.756 718.13 113.977 718.13 115.721V116.767H710.797C710.797 117.64 711.154 118.337 711.691 118.86C712.228 119.384 712.943 119.733 713.837 119.733C715.089 119.733 715.984 119.209 716.699 118.337L718.13 119.558C717.594 120.256 717.057 120.779 716.342 121.128C715.268 121.826 714.374 122 713.48 122ZM713.122 112.407C712.407 112.407 711.87 112.581 711.512 113.105C711.155 113.628 710.797 114.326 710.618 115.023H715.447V114.849C715.447 113.977 715.089 113.454 714.732 112.93C714.374 112.756 713.837 112.407 713.122 112.407ZM726 112.93C725.642 112.93 725.285 112.93 724.927 112.93C723.675 112.93 722.959 113.279 722.602 114.326V121.826H720.098V110.837H722.602V112.058C723.138 111.012 724.033 110.663 725.106 110.663C725.463 110.663 725.821 110.663 726 110.837V112.93Z"
          fill="#E7E7E7"
        />
        <path
          id="Vector_22"
          d="M731.114 108V110.658H733V112.608H731.114V118.81C731.114 119.165 731.114 119.519 731.286 119.696C731.457 119.873 731.8 120.051 732.143 120.051C732.486 120.051 732.657 120.051 733 119.873V121.823C732.486 122 731.971 122 731.457 122C729.571 122 728.714 120.937 728.714 118.81V112.608H727V110.658H728.714V108H731.114Z"
          fill="#E7E7E7"
        />
        <path
          id="Vector_23"
          d="M734 115.717C734 114.609 734.179 113.5 734.716 112.576C735.253 111.652 735.79 110.913 736.506 110.543C737.222 109.989 738.296 109.804 739.191 109.804C740.803 109.804 741.877 110.359 742.951 111.283C744.025 112.207 744.383 113.685 744.562 115.348V115.902C744.562 117.011 744.383 118.12 743.846 119.043C743.309 119.967 742.772 120.707 742.056 121.076C741.34 121.63 740.265 121.815 739.37 121.815C737.759 121.815 736.506 121.261 735.611 120.152C734.537 119.228 734 117.75 734 115.717ZM736.506 115.902C736.506 117.196 736.685 118.12 737.222 118.674C737.759 119.228 738.296 119.783 739.191 119.783C740.086 119.783 740.802 119.413 741.16 118.674C741.698 117.935 741.877 117.011 741.877 115.717C741.877 114.609 741.698 113.685 741.16 112.946C740.623 112.207 740.086 111.837 739.191 111.837C738.296 111.837 737.759 112.207 737.222 112.946C736.864 113.685 736.506 114.609 736.506 115.902ZM758.346 118.489C758.346 117.935 758.167 117.75 757.809 117.38C757.451 117.196 756.735 117.011 756.018 116.641C755.123 116.457 754.407 116.272 753.87 115.902C752.617 115.348 751.901 114.424 751.901 113.13C751.901 112.207 752.259 111.283 753.154 110.543C754.049 109.804 754.944 109.435 756.377 109.435C757.809 109.435 758.883 109.804 759.599 110.543C760.494 111.283 760.852 112.207 760.852 113.315H758.346C758.346 112.761 758.167 112.391 757.809 112.022C757.451 111.652 756.914 111.467 756.377 111.467C755.839 111.467 755.302 111.652 754.944 111.837C754.586 112.022 754.407 112.391 754.407 112.946C754.407 113.315 754.586 113.685 754.944 113.87C755.302 114.054 756.018 114.239 756.914 114.609C757.988 114.793 758.704 115.163 759.241 115.348C759.778 115.717 760.315 116.087 760.494 116.457C760.852 116.826 760.852 117.38 760.852 118.12C760.852 119.228 760.494 119.967 759.599 120.707C758.704 121.446 757.63 121.63 756.198 121.63C755.302 121.63 754.407 121.446 753.691 121.076C752.975 120.707 752.438 120.337 752.08 119.598C751.722 119.043 751.543 118.304 751.543 117.565H754.049C754.049 118.12 754.228 118.674 754.765 119.043C755.303 119.413 755.66 119.598 756.377 119.598C757.093 119.598 757.63 119.413 757.988 119.228C758.167 119.228 758.346 119.043 758.346 118.489ZM763.179 107.033C763.179 106.663 763.358 106.293 763.537 106.109C763.716 105.924 764.074 105.739 764.611 105.739C765.148 105.739 765.506 105.924 765.685 106.109C765.864 106.293 766.043 106.663 766.043 107.033C766.043 107.402 765.864 107.772 765.685 107.956C765.506 108.141 765.148 108.326 764.611 108.326C764.074 108.326 763.716 108.141 763.537 107.956C763.179 107.772 763.179 107.402 763.179 107.033ZM765.864 121.63H763.358V109.989H765.864V121.63ZM768.191 115.717C768.191 113.87 768.549 112.391 769.444 111.283C770.339 110.174 771.414 109.62 772.667 109.62C773.92 109.62 774.815 109.989 775.531 110.913V105H778.037V121.63H775.71L775.531 120.337C774.815 121.261 773.741 121.815 772.488 121.815C771.235 121.815 770.16 121.261 769.265 120.152C768.549 119.228 768.191 117.75 768.191 115.717ZM770.698 116.087C770.698 117.196 770.877 118.12 771.414 118.859C771.772 119.598 772.488 119.783 773.383 119.783C774.457 119.783 775.173 119.228 775.71 118.304V113.315C775.173 112.391 774.457 111.837 773.383 111.837C772.488 111.837 771.951 112.207 771.414 112.761C770.877 113.685 770.698 114.609 770.698 116.087ZM785.735 122C784.123 122 782.87 121.446 781.796 120.337C780.722 119.228 780.364 117.935 780.364 116.087V115.717C780.364 114.609 780.543 113.5 781.08 112.576C781.438 111.652 782.154 110.913 782.87 110.359C783.586 109.804 784.481 109.62 785.555 109.62C787.167 109.62 788.241 110.174 789.136 111.098C790.031 112.207 790.389 113.5 790.389 115.348V116.457H783.049C783.049 117.38 783.407 118.12 783.944 118.674C784.481 119.228 785.198 119.598 786.093 119.598C787.346 119.598 788.241 119.043 788.957 118.12L790.389 119.413C789.852 120.152 789.315 120.707 788.599 121.076C787.525 121.815 786.63 122 785.735 122ZM785.377 111.837C784.66 111.837 784.123 112.022 783.765 112.576C783.407 113.13 783.049 113.87 782.87 114.609H787.704V114.424C787.704 113.5 787.346 112.946 786.988 112.391C786.63 112.207 786.093 111.837 785.377 111.837ZM797.012 119.783C797.728 119.783 798.265 119.598 798.623 119.228C798.981 118.859 799.339 118.304 799.339 117.75H801.667C801.667 118.489 801.488 119.228 800.951 119.783C800.593 120.337 800.056 120.891 799.339 121.261C798.623 121.63 797.907 121.815 797.012 121.815C795.401 121.815 794.148 121.261 793.253 120.152C792.358 119.043 791.821 117.565 791.821 115.717C791.821 113.87 792.358 112.576 793.253 111.467C794.148 110.359 795.401 109.804 797.012 109.804C798.444 109.804 799.518 110.174 800.235 111.098C800.951 112.022 801.488 112.946 801.488 114.239H799.16C799.16 113.5 798.981 112.946 798.444 112.576C798.086 112.206 797.549 111.837 796.833 111.837C795.938 111.837 795.401 112.207 794.864 112.761C794.327 113.315 794.148 114.239 794.148 115.533V115.902C794.148 117.196 794.327 118.12 794.864 118.674C795.401 119.598 796.117 119.783 797.012 119.783ZM810.259 121.63C810.08 121.446 810.08 121.076 809.901 120.522C809.006 121.446 808.111 121.815 806.858 121.815C805.784 121.815 804.71 121.446 803.994 120.891C803.278 120.152 802.92 119.413 802.92 118.489C802.92 117.196 803.457 116.272 804.352 115.533C805.247 114.793 806.5 114.609 808.29 114.609H809.901V113.87C809.901 113.315 809.722 112.761 809.364 112.391C809.006 112.022 808.469 111.837 807.932 111.837C807.395 111.837 806.858 112.022 806.5 112.207C806.142 112.576 805.963 112.946 805.963 113.315H803.457C803.457 112.761 803.636 112.022 803.994 111.467C804.352 110.913 804.889 110.543 805.605 110.174C806.321 109.804 807.037 109.62 807.932 109.62C809.185 109.62 810.259 109.989 811.154 110.728C811.87 111.467 812.407 112.391 812.407 113.685V119.043C812.407 120.152 812.586 120.891 812.765 121.63V121.815H810.259V121.63ZM807.574 119.783C808.111 119.783 808.469 119.598 809.006 119.413C809.364 119.228 809.722 118.859 810.08 118.304V116.087H808.648C807.753 116.087 807.037 116.272 806.5 116.641C805.963 117.011 805.784 117.38 805.784 118.12C805.784 118.674 805.963 119.043 806.321 119.413C806.5 119.598 806.858 119.783 807.574 119.783ZM821 112.391C820.642 112.391 820.284 112.391 819.926 112.391C818.673 112.391 817.957 112.761 817.599 113.87V121.815H815.093V110.174H817.599V111.467C818.136 110.359 819.031 109.989 820.105 109.989C820.463 109.989 820.821 109.989 821 110.174V112.391Z"
          fill="#E7E7E7"
        />
      </g>
      <g id="sidecar1" filter="url(#sidecarFilter1)">
        <path
          className="bg"
          d="M348 113.5C348 112.423 348 111.345 348.179 110.268C348.358 109.191 348.358 108.113 348.716 107.215C349.073 106.318 349.252 105.24 349.431 104.163C349.789 103.086 350.146 102.188 350.504 101.11C350.862 100.213 351.399 99.1353 351.935 98.2375C352.472 97.3397 353.008 96.442 353.545 95.5442C354.082 94.6464 354.797 93.7486 355.513 93.0304C356.228 92.1326 356.943 91.4144 357.659 90.6961C358.374 89.9779 359.269 89.2596 359.984 88.5414C360.879 87.8232 361.594 87.2845 362.488 86.5663C363.383 86.0276 364.277 85.4889 365.171 84.9502C366.066 84.4116 367.139 84.0525 368.033 83.5138C368.928 83.1547 370.001 82.7956 371.074 82.4364C372.147 82.0773 373.042 81.8978 374.115 81.7182C375.188 81.5387 376.261 81.3591 377.156 81.1795C378.229 81 379.302 81 380.375 81H530.625C531.698 81 532.771 81 533.844 81.1795C534.918 81.3591 535.991 81.3591 536.885 81.7182C537.958 81.8978 538.853 82.2569 539.926 82.4364C540.999 82.7956 541.893 83.1547 542.967 83.5138C543.861 83.8729 544.934 84.4116 545.829 84.9502C546.723 85.4889 547.617 86.0276 548.512 86.5663C549.406 87.1049 550.3 87.8232 551.016 88.5414C551.91 89.2596 552.626 89.9779 553.341 90.6961C554.057 91.4144 554.772 92.3121 555.488 93.0304C556.203 93.9282 556.74 94.6464 557.455 95.5442C557.992 96.442 558.528 97.3397 559.065 98.2375C559.601 99.1353 559.959 100.213 560.496 101.11C560.854 102.008 561.211 103.086 561.569 104.163C561.927 105.24 562.106 106.138 562.285 107.215C562.463 108.293 562.642 109.37 562.821 110.268C563 111.345 563 112.423 563 113.5C563 114.577 563 115.655 562.821 116.732C562.642 117.809 562.642 118.887 562.285 119.785C562.106 120.862 561.748 121.76 561.569 122.837C561.211 123.914 560.854 124.812 560.496 125.89C560.138 126.787 559.601 127.865 559.065 128.762C558.528 129.66 557.992 130.558 557.455 131.456C556.918 132.354 556.203 133.251 555.488 133.97C554.772 134.688 554.057 135.586 553.341 136.304C552.626 137.022 551.731 137.74 551.016 138.459C550.3 139.177 549.406 139.715 548.512 140.434C547.617 140.972 546.723 141.511 545.829 142.05C544.934 142.588 543.861 142.948 542.967 143.486C542.072 143.845 540.999 144.204 539.926 144.564C538.853 144.923 537.958 145.102 536.885 145.282C535.812 145.461 534.739 145.641 533.844 145.82C532.771 146 531.698 146 530.625 146H380.375C379.302 146 378.229 146 377.156 145.82C376.082 145.641 375.009 145.641 374.115 145.282C373.042 145.102 372.147 144.743 371.074 144.564C370.001 144.204 369.107 143.845 368.033 143.486C367.139 143.127 366.066 142.588 365.171 142.05C364.277 141.511 363.383 140.972 362.488 140.434C361.594 139.895 360.7 139.177 359.984 138.459C359.09 137.74 358.374 137.022 357.659 136.304C356.943 135.586 356.228 134.688 355.513 133.97C354.797 133.251 354.26 132.354 353.545 131.456C353.008 130.558 352.472 129.66 351.935 128.762C351.399 127.865 351.041 126.787 350.504 125.89C350.146 124.992 349.789 123.914 349.431 122.837C349.073 121.76 348.894 120.862 348.716 119.785C348.537 118.707 348.358 117.63 348.179 116.732C348 115.475 348 114.398 348 113.5Z"
          fill="#1C484A"
        />
        <path
          id="Vector_25"
          d="M348 113.5C348 112.423 348 111.345 348.179 110.268C348.358 109.191 348.358 108.113 348.716 107.215C349.073 106.318 349.252 105.24 349.431 104.163C349.789 103.086 350.146 102.188 350.504 101.11C350.862 100.213 351.399 99.1353 351.935 98.2375C352.472 97.3397 353.008 96.442 353.545 95.5442C354.082 94.6464 354.797 93.7486 355.513 93.0304C356.228 92.1326 356.943 91.4144 357.659 90.6961C358.374 89.9779 359.269 89.2596 359.984 88.5414C360.879 87.8232 361.594 87.2845 362.488 86.5663C363.383 86.0276 364.277 85.4889 365.171 84.9502C366.066 84.4116 367.139 84.0525 368.033 83.5138C368.928 83.1547 370.001 82.7956 371.074 82.4364C372.147 82.0773 373.042 81.8978 374.115 81.7182C375.188 81.5387 376.261 81.3591 377.156 81.1795C378.229 81 379.302 81 380.375 81H530.625C531.698 81 532.771 81 533.844 81.1795C534.918 81.3591 535.991 81.3591 536.885 81.7182C537.958 81.8978 538.853 82.2569 539.926 82.4364C540.999 82.7956 541.893 83.1547 542.967 83.5138C543.861 83.8729 544.934 84.4116 545.829 84.9502C546.723 85.4889 547.617 86.0276 548.512 86.5663C549.406 87.1049 550.3 87.8232 551.016 88.5414C551.91 89.2596 552.626 89.9779 553.341 90.6961C554.057 91.4144 554.772 92.3121 555.487 93.0304C556.203 93.9282 556.74 94.6464 557.455 95.5442C557.992 96.442 558.528 97.3397 559.065 98.2375C559.601 99.1353 559.959 100.213 560.496 101.11C560.854 102.008 561.211 103.086 561.569 104.163C561.927 105.24 562.106 106.138 562.285 107.215C562.463 108.293 562.642 109.37 562.821 110.268C563 111.345 563 112.423 563 113.5C563 114.577 563 115.655 562.821 116.732C562.642 117.809 562.642 118.887 562.285 119.785C562.106 120.862 561.748 121.76 561.569 122.837C561.211 123.914 560.854 124.812 560.496 125.89C560.138 126.787 559.601 127.865 559.065 128.762C558.528 129.66 557.992 130.558 557.455 131.456C556.918 132.354 556.203 133.251 555.487 133.97C554.772 134.688 554.057 135.586 553.341 136.304C552.626 137.022 551.731 137.74 551.016 138.459C550.3 139.177 549.406 139.715 548.512 140.434C547.617 140.972 546.723 141.511 545.829 142.05C544.934 142.588 543.861 142.948 542.967 143.486C542.072 143.845 540.999 144.204 539.926 144.564C538.853 144.923 537.958 145.102 536.885 145.282C535.812 145.461 534.739 145.641 533.844 145.82C532.771 146 531.698 146 530.625 146H380.375C379.302 146 378.229 146 377.156 145.82C376.082 145.641 375.009 145.641 374.115 145.282C373.042 145.102 372.147 144.743 371.074 144.564C370.001 144.204 369.107 143.845 368.033 143.486C367.139 143.127 366.066 142.588 365.171 142.05C364.277 141.511 363.383 140.972 362.488 140.434C361.594 139.895 360.7 139.177 359.984 138.459C359.09 137.74 358.374 137.022 357.659 136.304C356.943 135.586 356.228 134.688 355.513 133.97C354.797 133.251 354.26 132.354 353.545 131.456C353.008 130.558 352.472 129.66 351.935 128.762C351.399 127.865 351.041 126.787 350.504 125.89C350.146 124.992 349.789 123.914 349.431 122.837C349.073 121.76 348.894 120.862 348.716 119.785C348.537 118.707 348.358 117.63 348.179 116.732C348 115.475 348 114.398 348 113.5Z"
          stroke="#215E60"
          strokeWidth="1.5"
        />
        <path
          id="Vector_26"
          d="M394.878 118.337H388.951L387.694 121.826H385L390.747 107H393.082L398.829 121.826H396.135L394.878 118.337ZM389.669 116.244H394.159L392.004 110.14L389.669 116.244ZM406.731 118.686C406.731 118.163 406.551 117.988 406.192 117.64C405.833 117.465 405.114 117.291 404.396 116.942C403.498 116.767 402.78 116.593 402.241 116.244C400.984 115.721 400.265 114.849 400.265 113.628C400.265 112.756 400.625 111.884 401.522 111.186C402.42 110.488 403.318 110.14 404.755 110.14C406.192 110.14 407.269 110.488 407.988 111.186C408.886 111.884 409.245 112.756 409.245 113.802H406.731C406.731 113.279 406.551 112.93 406.192 112.581C405.833 112.233 405.294 112.058 404.755 112.058C404.216 112.058 403.678 112.233 403.318 112.407C402.959 112.581 402.78 112.93 402.78 113.454C402.78 113.802 402.959 114.151 403.318 114.326C403.678 114.5 404.396 114.674 405.294 115.023C406.371 115.198 407.09 115.547 407.629 115.721C408.167 116.07 408.706 116.419 408.886 116.767C409.245 117.116 409.245 117.64 409.245 118.337C409.245 119.384 408.886 120.081 407.988 120.779C407.09 121.477 406.012 121.651 404.576 121.651C403.678 121.651 402.78 121.477 402.061 121.128C401.343 120.779 400.804 120.43 400.445 119.733C400.086 119.209 399.906 118.512 399.906 117.814H402.42C402.42 118.337 402.6 118.86 403.139 119.209C403.678 119.558 404.037 119.733 404.755 119.733C405.473 119.733 406.012 119.558 406.371 119.384C406.551 119.384 406.731 119.209 406.731 118.686ZM416.429 122C414.812 122 413.555 121.477 412.478 120.43C411.4 119.384 411.041 118.163 411.041 116.419V116.07C411.041 115.023 411.22 113.977 411.759 113.105C412.118 112.233 412.837 111.535 413.555 111.012C414.274 110.488 415.171 110.314 416.249 110.314C417.865 110.314 418.943 110.837 419.841 111.709C420.739 112.756 421.098 113.977 421.098 115.721V116.767H413.735C413.735 117.64 414.094 118.337 414.633 118.86C415.171 119.384 415.89 119.733 416.788 119.733C418.045 119.733 418.943 119.209 419.661 118.337L421.098 119.558C420.559 120.256 420.02 120.779 419.302 121.128C418.224 121.826 417.506 122 416.429 122ZM416.249 112.407C415.531 112.407 414.992 112.581 414.633 113.105C414.273 113.628 413.914 114.326 413.735 115.023H418.584V114.849C418.584 113.977 418.225 113.454 417.865 112.93C417.506 112.756 416.967 112.407 416.249 112.407ZM429 112.93C428.641 112.93 428.282 112.93 427.922 112.93C426.665 112.93 425.947 113.279 425.588 114.326V121.826H423.073V110.837H425.588V112.058C426.127 111.012 427.024 110.663 428.102 110.663C428.461 110.663 428.82 110.663 429 110.837V112.93Z"
          fill="#E7E7E7"
        />
        <path
          id="Vector_27"
          d="M434.114 108V110.658H436V112.608H434.114V118.81C434.114 119.165 434.114 119.519 434.286 119.696C434.457 119.873 434.8 120.051 435.143 120.051C435.486 120.051 435.657 120.051 436 119.873V121.823C435.486 122 434.971 122 434.457 122C432.571 122 431.714 120.937 431.714 118.81V112.608H430V110.658H431.714V108H434.114Z"
          fill="#E7E7E7"
        />
        <path
          id="Vector_28"
          d="M438 115.717C438 114.609 438.179 113.5 438.715 112.576C439.251 111.652 439.786 110.913 440.501 110.543C441.216 109.989 442.287 109.804 443.181 109.804C444.788 109.804 445.86 110.359 446.932 111.283C448.004 112.207 448.361 113.685 448.54 115.348V115.902C448.54 117.011 448.361 118.12 447.825 119.043C447.29 119.967 446.754 120.707 446.039 121.076C445.324 121.63 444.253 121.815 443.359 121.815C441.752 121.815 440.501 121.261 439.608 120.152C438.536 119.228 438 117.75 438 115.717ZM440.68 115.902C440.68 117.196 440.858 118.12 441.394 118.674C441.93 119.228 442.466 119.783 443.359 119.783C444.253 119.783 444.967 119.413 445.324 118.674C445.86 117.935 446.039 117.011 446.039 115.717C446.039 114.609 445.86 113.685 445.324 112.946C444.789 112.207 444.253 111.837 443.359 111.837C442.466 111.837 441.93 112.207 441.394 112.946C440.858 113.685 440.68 114.609 440.68 115.902ZM462.474 118.489C462.474 117.935 462.296 117.75 461.938 117.38C461.581 117.196 460.867 117.011 460.152 116.641C459.259 116.457 458.544 116.272 458.008 115.902C456.758 115.348 456.043 114.424 456.043 113.13C456.043 112.207 456.4 111.283 457.294 110.543C458.187 109.804 459.08 109.435 460.509 109.435C461.938 109.435 463.01 109.804 463.725 110.543C464.618 111.283 464.975 112.207 464.975 113.315H462.474C462.474 112.761 462.296 112.391 461.938 112.022C461.581 111.652 461.045 111.467 460.509 111.467C459.973 111.467 459.437 111.652 459.08 111.837C458.723 112.022 458.544 112.391 458.544 112.946C458.544 113.315 458.723 113.685 459.08 113.87C459.437 114.054 460.152 114.239 461.045 114.609C462.117 114.793 462.832 115.163 463.368 115.348C463.904 115.717 464.439 116.087 464.618 116.457C464.975 116.826 464.975 117.38 464.975 118.12C464.975 119.228 464.618 119.967 463.725 120.707C462.832 121.446 461.76 121.63 460.331 121.63C459.437 121.63 458.544 121.446 457.83 121.076C457.115 120.707 456.579 120.337 456.222 119.598C455.864 119.043 455.686 118.304 455.686 117.565H458.187C458.187 118.12 458.366 118.674 458.901 119.043C459.437 119.413 459.795 119.598 460.509 119.598C461.224 119.598 461.76 119.413 462.117 119.228C462.296 119.228 462.474 119.043 462.474 118.489ZM467.119 107.033C467.119 106.663 467.298 106.293 467.476 106.109C467.655 105.924 468.012 105.739 468.548 105.739C469.084 105.739 469.441 105.924 469.62 106.109C469.799 106.293 469.977 106.663 469.977 107.033C469.977 107.402 469.799 107.772 469.62 107.956C469.441 108.141 469.084 108.326 468.548 108.326C468.012 108.326 467.655 108.141 467.476 107.956C467.298 107.772 467.119 107.402 467.119 107.033ZM469.799 121.63H467.298V109.989H469.799V121.63ZM472.121 115.717C472.121 113.87 472.478 112.391 473.372 111.283C474.265 110.174 475.337 109.62 476.587 109.62C477.838 109.62 478.731 109.989 479.446 110.913V105H481.947V121.63H479.624L479.446 120.337C478.731 121.261 477.659 121.815 476.409 121.815C475.158 121.815 474.086 121.261 473.193 120.152C472.478 119.228 472.121 117.75 472.121 115.717ZM474.622 116.087C474.622 117.196 474.801 118.12 475.337 118.859C475.694 119.598 476.409 119.783 477.302 119.783C478.374 119.783 479.088 119.228 479.624 118.304V113.315C479.088 112.391 478.374 111.837 477.302 111.837C476.409 111.837 475.873 112.207 475.337 112.761C474.979 113.685 474.622 114.609 474.622 116.087ZM489.807 122C488.199 122 486.949 121.446 485.877 120.337C484.805 119.228 484.448 117.935 484.448 116.087V115.717C484.448 114.609 484.626 113.5 485.162 112.576C485.519 111.652 486.234 110.913 486.949 110.359C487.663 109.804 488.556 109.62 489.628 109.62C491.236 109.62 492.308 110.174 493.201 111.098C494.094 112.207 494.452 113.5 494.452 115.348V116.457H487.127C487.127 117.38 487.485 118.12 488.021 118.674C488.556 119.228 489.271 119.598 490.164 119.598C491.415 119.598 492.308 119.043 493.023 118.12L494.452 119.413C493.916 120.152 493.38 120.707 492.665 121.076C491.593 121.815 490.7 122 489.807 122ZM489.45 111.837C488.735 111.837 488.199 112.022 487.842 112.576C487.485 113.13 487.127 113.87 486.949 114.609H491.772V114.424C491.772 113.5 491.415 112.946 491.058 112.391C490.7 112.207 490.164 111.837 489.45 111.837ZM500.883 119.783C501.598 119.783 502.133 119.598 502.491 119.228C502.848 118.859 503.205 118.304 503.205 117.75H505.528C505.528 118.489 505.349 119.228 504.813 119.783C504.456 120.337 503.92 120.891 503.205 121.261C502.491 121.63 501.776 121.815 500.883 121.815C499.275 121.815 498.025 121.261 497.131 120.152C496.238 119.043 495.702 117.565 495.702 115.717C495.702 113.87 496.238 112.576 497.131 111.467C498.025 110.359 499.275 109.804 500.883 109.804C502.312 109.804 503.384 110.174 504.099 111.098C504.813 112.022 505.349 112.946 505.349 114.239H503.027C503.027 113.5 502.848 112.946 502.312 112.576C501.955 112.206 501.419 111.837 500.704 111.837C499.811 111.837 499.275 112.207 498.739 112.761C498.203 113.315 498.025 114.239 498.025 115.533V115.902C498.025 117.196 498.203 118.12 498.739 118.674C499.454 119.598 499.99 119.783 500.883 119.783ZM514.281 121.63C514.103 121.446 514.103 121.076 513.924 120.522C513.031 121.446 512.138 121.815 510.887 121.815C509.815 121.815 508.743 121.446 508.029 120.891C507.314 120.152 506.957 119.413 506.957 118.489C506.957 117.196 507.493 116.272 508.386 115.533C509.279 114.793 510.53 114.609 512.316 114.609H513.924V113.87C513.924 113.315 513.745 112.761 513.388 112.391C513.031 112.022 512.495 111.837 511.959 111.837C511.423 111.837 510.887 112.022 510.53 112.207C510.172 112.576 509.994 112.946 509.994 113.315H507.493C507.493 112.761 507.671 112.022 508.029 111.467C508.386 110.913 508.922 110.543 509.637 110.174C510.351 109.804 511.066 109.62 511.959 109.62C513.209 109.62 514.281 109.989 515.175 110.728C515.889 111.467 516.425 112.391 516.425 113.685V119.043C516.425 120.152 516.604 120.891 516.782 121.63V121.815H514.281V121.63ZM511.423 119.783C511.959 119.783 512.316 119.598 512.852 119.413C513.209 119.228 513.567 118.859 513.924 118.304V116.087H512.495C511.602 116.087 510.887 116.272 510.351 116.641C509.815 117.011 509.637 117.38 509.637 118.12C509.637 118.674 509.815 119.043 510.172 119.413C510.53 119.598 510.887 119.783 511.423 119.783ZM525 112.391C524.643 112.391 524.285 112.391 523.928 112.391C522.678 112.391 521.963 112.761 521.606 113.87V121.815H519.105V110.174H521.606V111.467C522.142 110.359 523.035 109.989 524.107 109.989C524.464 109.989 524.821 109.989 525 110.174V112.391Z"
          fill="#E7E7E7"
        />
      </g>
      <g id="react" filter="url(#filter8_d)">
        <path
          id="reactBg"
          d="M49.0447 68.1708V11.8293C49.0447 11.2927 49.2235 10.5772 49.4023 10.0406C49.581 9.50406 49.9385 8.96749 50.4749 8.4309C50.8324 8.07318 51.3687 7.71544 52.0838 7.35772C52.6201 7.17886 53.3352 7 53.8715 7H260.173C260.709 7 261.425 7.17886 261.961 7.35772C262.497 7.53658 263.033 7.89431 263.57 8.4309C263.927 8.78862 264.285 9.3252 264.642 10.0406C264.821 10.5772 265 11.2927 265 11.8293V68.1708C265 68.7074 264.821 69.4228 264.642 69.9594C264.464 70.496 264.106 71.0325 263.57 71.5691C263.212 71.9268 262.676 72.2846 261.961 72.6423C261.425 72.8212 260.709 73 260.173 73H53.6927C53.1564 73 52.4413 72.8212 51.905 72.6423C51.3687 72.4634 50.8324 72.1057 50.2961 71.5691C49.7598 71.0325 49.581 70.6748 49.2235 69.9594C48.8659 69.2439 49.0447 68.8862 49.0447 68.1708Z"
          fill="#121212"
        />
        <path
          id="reactBorder"
          d="M49.0447 68.1708V11.8293C49.0447 11.2927 49.2235 10.5772 49.4023 10.0406C49.581 9.50406 49.9385 8.96749 50.4749 8.4309C50.8324 8.07318 51.3687 7.71544 52.0838 7.35772C52.6201 7.17886 53.3352 7 53.8715 7H260.173C260.709 7 261.425 7.17886 261.961 7.35772C262.497 7.53658 263.033 7.89431 263.57 8.4309C263.927 8.78862 264.285 9.3252 264.642 10.0406C264.821 10.5772 265 11.2927 265 11.8293V68.1708C265 68.7073 264.821 69.4228 264.642 69.9594C264.464 70.496 264.106 71.0325 263.57 71.5691C263.212 71.9269 262.676 72.2846 261.961 72.6423C261.425 72.8212 260.709 73 260.173 73H53.6927C53.1564 73 52.4413 72.8212 51.905 72.6423C51.3687 72.4634 50.8324 72.1057 50.2961 71.5691C49.7598 71.0325 49.581 70.6748 49.2235 69.9594C48.8659 69.2439 49.0447 68.8862 49.0447 68.1708Z"
          stroke="#3364AE"
          strokeWidth="0.75"
        />
        <path
          className="text"
          d="M115.74 42.0642H112.691V47.8165H110V33H115.382C117.176 33 118.431 33.3486 119.508 34.2202C120.405 34.9175 120.943 36.1376 120.943 37.5321C120.943 38.578 120.763 39.2752 120.225 39.9725C119.687 40.6697 118.969 41.1927 118.073 41.5413L121.481 47.8165V47.9908H118.611L115.74 42.0642ZM112.87 39.9725H115.561C116.458 39.9725 117.176 39.7982 117.714 39.2752C118.252 38.7523 118.431 38.2294 118.431 37.5321C118.431 36.6606 118.252 36.1376 117.714 35.6147C117.176 35.2661 116.637 34.9174 115.561 34.9174H112.691V39.9725H112.87ZM128.298 47.9908C126.683 47.9908 125.427 47.4679 124.351 46.422C123.275 45.3762 122.916 44.156 122.916 42.4128V42.0642C122.916 41.0184 123.095 39.9725 123.634 39.1009C123.992 38.2294 124.71 37.5321 125.427 37.0092C126.145 36.4862 127.042 36.3119 128.118 36.3119C129.733 36.3119 130.809 36.8349 131.706 37.7064C132.603 38.7523 132.962 39.9725 132.962 41.7156V42.7615H125.607C125.607 43.633 125.966 44.3303 126.504 44.8532C127.042 45.3761 127.76 45.7248 128.657 45.7248C129.912 45.7248 130.809 45.2018 131.527 44.3303L132.962 45.5505C132.424 46.2477 131.885 46.7707 131.168 47.1193C130.092 47.8165 129.195 47.9908 128.298 47.9908ZM127.939 38.578C127.221 38.578 126.683 38.7523 126.324 39.2752C125.966 39.7982 125.607 40.4954 125.427 41.1927H130.271V41.0184C130.271 40.1468 129.912 39.6239 129.553 39.1009C129.195 38.7523 128.656 38.578 127.939 38.578ZM141.573 47.8165C141.393 47.6422 141.393 47.2936 141.214 46.7706C140.317 47.6422 139.42 47.9908 138.164 47.9908C137.088 47.9908 136.011 47.6422 135.294 47.1193C134.576 46.422 134.218 45.7248 134.218 44.8532C134.218 43.633 134.756 42.7615 135.653 42.0642C136.55 41.367 137.805 41.1927 139.599 41.1927H141.214V40.4954C141.214 39.9725 141.034 39.4495 140.676 39.1009C140.317 38.7523 139.779 38.578 139.24 38.578C138.702 38.578 138.164 38.7523 137.805 38.9266C137.447 39.2752 137.267 39.6239 137.267 39.9725H134.756C134.756 39.4495 134.935 38.7523 135.294 38.2294C135.653 37.7064 136.191 37.3578 136.908 37.0092C137.626 36.6605 138.344 36.4862 139.24 36.4862C140.496 36.4862 141.573 36.8349 142.469 37.5321C143.187 38.2294 143.725 39.1009 143.725 40.3211V45.3762C143.725 46.422 143.905 47.1193 144.084 47.8165V47.9908H141.573V47.8165ZM138.882 46.0734C139.42 46.0734 139.779 45.8991 140.317 45.7248C140.676 45.5504 141.034 45.2019 141.393 44.6789V42.5872H139.958C139.061 42.5872 138.344 42.7615 137.805 43.1101C137.267 43.4587 137.088 43.8074 137.088 44.5046C137.088 45.0275 137.267 45.3761 137.626 45.7248C137.805 45.8991 138.344 46.0734 138.882 46.0734ZM151.26 46.0734C151.977 46.0734 152.515 45.8991 152.874 45.5505C153.233 45.2019 153.592 44.6789 153.592 44.156H155.924C155.924 44.8532 155.744 45.5505 155.206 46.0734C154.847 46.5963 154.309 47.1193 153.592 47.4679C152.874 47.8165 152.156 47.9908 151.26 47.9908C149.645 47.9908 148.389 47.4679 147.492 46.422C146.595 45.3762 146.057 43.9816 146.057 42.2385V42.0642C146.057 40.3211 146.595 39.1009 147.492 38.055C148.389 37.0092 149.645 36.4862 151.26 36.4862C152.695 36.4862 153.771 36.8349 154.489 37.7064C155.206 38.578 155.744 39.4495 155.744 40.6697H153.412C153.412 39.9725 153.233 39.4495 152.695 39.1009C152.336 38.7523 151.798 38.4037 151.08 38.4037C150.183 38.4037 149.645 38.7523 149.107 39.2752C148.569 39.7982 148.389 40.6697 148.389 41.8899V42.2385C148.389 43.4587 148.569 44.3303 149.107 44.8532C149.645 45.7248 150.363 46.0734 151.26 46.0734ZM160.947 34.0459V36.6606H162.92V38.578H160.947V44.6789C160.947 45.0276 160.947 45.3762 161.126 45.5505C161.305 45.7248 161.664 45.8991 162.023 45.8991C162.382 45.8991 162.561 45.8991 162.92 45.7248V47.6422C162.382 47.8165 161.844 47.8165 161.305 47.8165C159.332 47.8165 158.435 46.7707 158.435 44.6789V38.4037H156.641V36.4862H158.435V33.8716H160.947V34.0459ZM177.092 47.8165C176.912 47.6422 176.912 47.2936 176.733 46.7706C175.836 47.6422 174.939 47.9908 173.683 47.9908C172.607 47.9908 171.531 47.6422 170.813 47.1193C170.095 46.422 169.737 45.7248 169.737 44.8532C169.737 43.633 170.275 42.7615 171.172 42.0642C172.069 41.367 173.324 41.1927 175.118 41.1927H176.733V40.4954C176.733 39.9725 176.553 39.4495 176.195 39.1009C175.836 38.7523 175.298 38.578 174.76 38.578C174.221 38.578 173.683 38.7523 173.324 38.9266C172.966 39.2752 172.786 39.6239 172.786 39.9725H170.275C170.275 39.4495 170.454 38.7523 170.813 38.2294C171.172 37.7064 171.71 37.3578 172.427 37.0092C173.145 36.6605 173.863 36.4862 174.76 36.4862C176.015 36.4862 177.092 36.8349 177.989 37.5321C178.706 38.2294 179.244 39.1009 179.244 40.3211V45.3762C179.244 46.422 179.424 47.1193 179.603 47.8165V47.9908H177.092V47.8165ZM174.221 46.0734C174.76 46.0734 175.118 45.8991 175.656 45.7248C176.015 45.5504 176.374 45.2019 176.733 44.6789V42.5872H175.298C174.401 42.5872 173.683 42.7615 173.145 43.1101C172.607 43.4587 172.427 43.8074 172.427 44.5046C172.427 45.0275 172.607 45.3761 172.966 45.7248C173.324 45.8991 173.683 46.0734 174.221 46.0734ZM191.981 42.4128C191.981 44.156 191.622 45.5505 190.725 46.422C190.008 47.4679 188.931 47.9908 187.496 47.9908C186.24 47.9908 185.164 47.6422 184.447 46.7706V52H181.935V36.6606H184.267L184.447 37.7064C185.164 36.8349 186.24 36.3119 187.496 36.3119C188.931 36.3119 190.008 36.8348 190.725 37.8807C191.443 39.1009 191.981 40.4954 191.981 42.4128ZM189.29 42.2385C189.29 41.1926 189.111 40.3211 188.573 39.6238C188.034 38.9266 187.496 38.578 186.599 38.578C185.523 38.578 184.805 38.9266 184.267 39.7982V44.6789C184.805 45.5505 185.523 45.8991 186.599 45.8991C187.496 45.8991 188.034 45.5505 188.573 45.0275C189.111 44.5046 189.29 43.4587 189.29 42.2385ZM204 42.4128C204 44.156 203.641 45.5505 202.744 46.422C202.027 47.4679 200.95 47.9908 199.515 47.9908C198.26 47.9908 197.183 47.6422 196.466 46.7706V52H193.954V36.6606H196.286L196.466 37.7064C197.183 36.8349 198.26 36.3119 199.515 36.3119C200.95 36.3119 202.027 36.8348 202.744 37.8807C203.641 39.1009 204 40.4954 204 42.4128ZM201.489 42.2385C201.489 41.1926 201.309 40.3211 200.771 39.6238C200.233 38.9266 199.695 38.578 198.798 38.578C197.721 38.578 197.004 38.9266 196.466 39.7982V44.6789C197.004 45.5505 197.721 45.8991 198.798 45.8991C199.695 45.8991 200.233 45.5505 200.771 45.0275C201.309 44.5046 201.489 43.4587 201.489 42.2385Z"
          fill="#3364AE"
        />
      </g>
      <g id="api" filter="url(#filter9_d)">
        <path
          id="apiBG"
          d="M347.045 68.1708V11.8293C347.045 11.2927 347.223 10.5772 347.402 10.0406C347.581 9.50406 347.938 8.96749 348.474 8.4309C348.831 8.07318 349.367 7.71544 350.081 7.35772C350.617 7.17886 351.332 7 351.867 7H558.177C558.713 7 559.428 7.17886 559.963 7.35772C560.499 7.53658 561.035 7.89431 561.571 8.4309C561.928 8.78862 562.286 9.3252 562.643 10.0406C562.821 10.5772 563 11.2927 563 11.8293V68.1708C563 68.7074 562.821 69.4228 562.643 69.9594C562.464 70.496 562.107 71.0325 561.571 71.5691C561.035 72.1057 560.678 72.2846 559.963 72.6423C559.428 72.8212 558.713 73 558.177 73H351.689C351.153 73 350.439 72.8212 349.903 72.6423C349.367 72.4634 348.831 72.1057 348.295 71.5691C347.938 71.2114 347.581 70.6748 347.223 69.9594C346.866 69.2439 347.045 68.8862 347.045 68.1708Z"
          fill="#121212"
          stroke="#3465AE"
          strokeMiterlimit="10"
        />
        <path
          className="text"
          d="M447.832 44.4706H441.933L440.682 48H438L443.721 33H446.045L451.765 48H449.084L447.832 44.4706ZM442.648 42.3529H447.117L444.972 36.1764L442.648 42.3529ZM456.235 42.3529V48H453.553V33H459.453C461.24 33 462.492 33.353 463.564 34.2353C464.637 35.1177 464.994 36.353 464.994 37.7647C464.994 39.1765 464.458 40.4118 463.564 41.2941C462.67 42.1765 461.24 42.5294 459.453 42.5294H456.235V42.3529ZM456.235 40.2353H459.453C460.346 40.2353 461.061 40.0588 461.598 39.5294C462.134 39.1765 462.313 38.4706 462.313 37.5882C462.313 36.7059 462.134 36.1765 461.598 35.6471C461.061 35.1176 460.346 34.9412 459.453 34.9412H456.235V40.2353ZM470 48H467.318V33H470V48Z"
          fill="#3364AE"
        />
      </g>
      <g id="api2" filter="url(#filter10_d)">
        <path
          id="api2Bg"
          d="M645.045 68.1708V11.8293C645.045 11.2927 645.223 10.5772 645.402 10.0406C645.581 9.50406 645.939 8.96749 646.475 8.4309C646.832 8.07318 647.369 7.71544 648.084 7.35772C648.62 7.17886 649.335 7 649.872 7H856.173C856.709 7 857.425 7.17886 857.961 7.35772C858.497 7.53658 859.034 7.89431 859.57 8.4309C859.927 8.78862 860.285 9.3252 860.642 10.0406C860.821 10.5772 861 11.2927 861 11.8293V68.1708C861 68.7074 860.821 69.4228 860.642 69.9594C860.464 70.496 860.106 71.0325 859.57 71.5691C859.212 71.9268 858.676 72.2846 857.961 72.6423C857.425 72.8212 856.709 73 856.173 73H649.693C649.156 73 648.441 72.8212 647.905 72.6423C647.369 72.4634 646.832 72.1057 646.296 71.5691C645.939 71.2114 645.581 70.6748 645.223 69.9594C644.866 69.2439 645.045 68.8862 645.045 68.1708Z"
          fill="#121212"
        />
        <path
          id="api2Border"
          d="M645.045 68.1708V11.8293C645.045 11.2927 645.223 10.5772 645.402 10.0406C645.581 9.50406 645.939 8.96749 646.475 8.4309C646.832 8.07318 647.369 7.71544 648.084 7.35772C648.62 7.17886 649.335 7 649.872 7H856.173C856.709 7 857.425 7.17886 857.961 7.35772C858.497 7.53658 859.034 7.89431 859.57 8.4309C859.927 8.78862 860.285 9.3252 860.642 10.0406C860.821 10.5772 861 11.2927 861 11.8293V68.1708C861 68.7073 860.821 69.4228 860.642 69.9594C860.464 70.496 860.106 71.0325 859.57 71.5691C859.212 71.9269 858.676 72.2846 857.961 72.6423C857.425 72.8212 856.709 73 856.173 73H649.693C649.156 73 648.441 72.8212 647.905 72.6423C647.369 72.4634 646.832 72.1057 646.296 71.5691C645.939 71.2114 645.581 70.6748 645.223 69.9594C644.866 69.2439 645.045 68.8862 645.045 68.1708Z"
          stroke="#3364AE"
          strokeWidth="0.75"
        />
        <path
          className="text"
          d="M745.832 44.4706H739.933L738.682 48H736L741.721 33H744.045L749.765 48H747.084L745.832 44.4706ZM740.648 42.3529H745.117L742.972 36.1764L740.648 42.3529ZM754.235 42.3529V48H751.553V33H757.453C759.24 33 760.492 33.353 761.564 34.2353C762.637 35.1177 762.994 36.353 762.994 37.7647C762.994 39.1765 762.458 40.4118 761.564 41.2941C760.67 42.1765 759.24 42.5294 757.453 42.5294H754.235V42.3529ZM754.235 40.2353H757.453C758.346 40.2353 759.061 40.0588 759.598 39.5294C760.134 39.1765 760.313 38.4706 760.313 37.5882C760.313 36.7059 760.134 36.1765 759.598 35.6471C759.061 35.1176 758.346 34.9412 757.453 34.9412H754.235V40.2353ZM768 48H765.318V33H768V48Z"
          fill="#3364AE"
        />
      </g>
      <g id="provider" filter="url(#filter11_d)">
        <path
          id="providerBg"
          d="M341 593C381.869 593 415 559.869 415 519C415 478.131 381.869 445 341 445C300.131 445 267 478.131 267 519C267 559.869 300.131 593 341 593Z"
          fill="#121212"
        />
        <path
          id="providerBorder"
          d="M341 593C381.869 593 415 559.869 415 519C415 478.131 381.869 445 341 445C300.131 445 267 478.131 267 519C267 559.869 300.131 593 341 593Z"
          stroke="#3364AE"
          strokeWidth="1.5"
        />
        <path
          className="text"
          d="M285.967 521.724H284V510.69H285.967V521.724ZM287.756 517.414C287.756 516.207 288.113 515.172 288.65 514.31C289.186 513.621 290.081 513.103 291.154 513.103C292.048 513.103 292.763 513.448 293.3 513.965V510H295.267V521.724H293.479L293.3 520.862C292.763 521.552 292.048 521.897 290.975 521.897C289.902 521.897 289.186 521.552 288.471 520.69C288.113 519.828 287.756 518.793 287.756 517.414ZM289.723 517.586C289.723 518.448 289.902 519.138 290.259 519.483C290.617 520 291.154 520.172 291.69 520.172C292.406 520.172 293.121 519.828 293.479 519.138V515.69C293.121 515 292.584 514.655 291.869 514.655C291.332 514.655 290.796 514.828 290.438 515.345C289.902 516.034 289.723 516.724 289.723 517.586ZM300.99 521.724C299.738 521.724 298.844 521.379 298.128 520.69C297.413 520 297.055 518.966 297.055 517.759V517.586C297.055 516.724 297.234 516.034 297.592 515.345C297.95 514.655 298.307 514.138 299.023 513.793C299.559 513.448 300.275 513.276 300.99 513.276C302.063 513.276 302.957 513.621 303.673 514.31C304.388 515 304.567 516.034 304.567 517.414V518.103H299.023C299.023 518.793 299.38 519.31 299.738 519.655C300.096 520 300.632 520.172 301.348 520.172C302.242 520.172 302.957 519.828 303.494 519.138L304.567 520C304.209 520.517 303.851 520.862 303.136 521.207C302.421 521.724 301.705 521.724 300.99 521.724ZM300.811 514.828C300.275 514.828 299.917 515 299.559 515.345C299.201 515.69 299.023 516.207 299.023 516.897H302.599V516.724C302.599 516.035 302.421 515.69 302.063 515.345C301.705 515 301.348 514.828 300.811 514.828ZM307.607 513.448V514.31C308.322 513.621 309.038 513.276 310.111 513.276C311.899 513.276 312.793 514.31 312.793 516.207V521.552H310.826V516.207C310.826 515.69 310.647 515.345 310.469 515C310.29 514.828 309.932 514.655 309.395 514.655C308.68 514.655 307.965 515 307.607 515.69V521.552H305.64V513.448H307.607ZM317.265 511.379V513.448H318.695V514.828H317.265V519.483C317.265 519.828 317.264 520 317.443 520.172C317.622 520.345 317.801 520.345 318.159 520.345C318.338 520.345 318.516 520.345 318.874 520.345V521.724C318.516 521.897 317.98 521.897 317.622 521.897C316.191 521.897 315.476 521.034 315.476 519.483V514.828H314.045V513.448H315.476V511.379H317.265ZM320.126 511.379C320.126 511.034 320.305 510.862 320.484 510.69C320.662 510.517 321.02 510.345 321.199 510.345C321.378 510.345 321.736 510.517 321.914 510.69C322.093 510.862 322.272 511.034 322.272 511.379C322.272 511.724 322.093 511.897 321.914 512.069C321.736 512.241 321.378 512.414 321.199 512.414C321.02 512.414 320.662 512.241 320.484 512.069C320.305 511.897 320.126 511.552 320.126 511.379ZM322.272 521.724H320.305V513.448H322.272V521.724ZM326.743 511.379V513.448H328.174V514.828H326.743V519.483C326.743 519.828 326.743 520 326.922 520.172C327.101 520.345 327.28 520.345 327.637 520.345C327.816 520.345 327.995 520.345 328.353 520.345V521.724C327.995 521.897 327.458 521.897 327.101 521.897C325.67 521.897 324.955 521.034 324.955 519.483V514.828H323.524V513.448H324.955V511.379H326.743ZM332.645 518.966L334.433 513.448H336.401L333.003 522.931C332.466 524.31 331.572 525 330.32 525C329.962 525 329.783 525 329.426 524.828V523.448H329.783C330.32 523.448 330.678 523.448 330.856 523.276C331.035 523.103 331.214 522.759 331.393 522.414L331.751 521.724L328.71 513.621H330.856L332.645 518.966ZM348.919 517.586C348.919 518.793 348.562 519.828 348.025 520.69C347.489 521.552 346.594 521.897 345.7 521.897C344.806 521.897 344.091 521.552 343.375 521.035V525H341.408V513.448H343.197V514.31C343.733 513.621 344.448 513.276 345.521 513.276C346.594 513.276 347.31 513.621 348.025 514.31C348.562 515.172 348.919 516.207 348.919 517.586ZM346.952 517.414C346.952 516.552 346.773 515.862 346.416 515.517C346.058 515 345.521 514.828 344.985 514.828C344.27 514.828 343.554 515.172 343.375 515.69V519.31C343.733 520 344.27 520.345 344.985 520.345C345.521 520.345 346.058 520.172 346.416 519.655C346.952 519.138 346.952 518.448 346.952 517.414ZM355 515.172C354.821 515.172 354.463 515.172 354.285 515.172C353.39 515.172 352.854 515.517 352.496 516.207V521.897H350.529V513.448H352.317V514.31C352.854 513.621 353.39 513.276 354.285 513.276C354.642 513.276 354.821 513.276 355 513.448V515.172Z"
          fill="#3364AE"
        />
        <path
          className="text"
          d="M355 517.5C355 516.6 355.178 515.88 355.533 515.16C355.889 514.44 356.244 513.9 356.956 513.54C357.667 513.18 358.2 513 359.089 513C360.156 513 361.222 513.36 361.933 514.08C362.644 514.8 363 515.88 363 516.96V517.5C363 518.4 362.822 519.12 362.467 519.84C362.111 520.56 361.756 521.1 361.044 521.46C360.511 521.82 359.8 522 358.911 522C357.667 522 356.778 521.64 356.067 520.74C355.356 520.02 355 518.94 355 517.5ZM356.956 517.68C356.956 518.58 357.133 519.3 357.489 519.66C357.844 520.2 358.378 520.38 358.911 520.38C359.444 520.38 359.978 520.2 360.333 519.66C360.689 519.12 360.867 518.4 360.867 517.5C360.867 516.6 360.689 515.88 360.333 515.52C359.978 515.16 359.444 514.8 358.911 514.8C358.378 514.8 357.844 514.98 357.489 515.52C357.133 516.06 356.956 516.78 356.956 517.68Z"
          fill="#3364AE"
        />
        <path
          className="text"
          d="M367.769 519.391L369.564 513.478H371.538L368.667 521.826H367.051L364 513.478H365.974L367.769 519.391ZM372.615 511.391C372.615 511.043 372.795 510.87 372.974 510.696C373.154 510.522 373.513 510.348 373.692 510.348C373.872 510.348 374.231 510.522 374.41 510.696C374.59 510.87 374.769 511.043 374.769 511.391C374.769 511.739 374.59 511.913 374.41 512.087C374.231 512.261 373.872 512.435 373.692 512.435C373.513 512.435 373.154 512.261 372.974 512.087C372.795 511.913 372.615 511.565 372.615 511.391ZM374.769 521.826H372.795V513.478H374.769V521.826ZM376.385 517.478C376.385 516.261 376.744 515.217 377.282 514.348C377.821 513.652 378.718 513.13 379.795 513.13C380.692 513.13 381.41 513.478 381.949 514V510H383.923V521.826H382.128L381.949 520.956C381.41 521.652 380.692 522 379.615 522C378.538 522 377.82 521.652 377.103 520.783C376.744 519.913 376.385 518.87 376.385 517.478ZM378.359 517.652C378.359 518.522 378.538 519.217 378.897 519.565C379.256 520.087 379.795 520.261 380.333 520.261C381.051 520.261 381.769 519.913 382.128 519.217V515.739C381.769 515.043 381.231 514.696 380.513 514.696C379.974 514.696 379.436 514.87 379.077 515.391C378.538 516.087 378.359 516.783 378.359 517.652ZM389.667 521.826C388.41 521.826 387.513 521.478 386.795 520.783C386.077 520.087 385.718 519.043 385.718 517.826V517.652C385.718 516.783 385.897 516.087 386.256 515.391C386.615 514.696 386.974 514.174 387.692 513.826C388.231 513.478 388.949 513.304 389.667 513.304C390.744 513.304 391.641 513.652 392.359 514.348C393.077 515.043 393.256 516.087 393.256 517.478V518.174H387.692C387.692 518.87 388.051 519.391 388.41 519.739C388.769 520.087 389.308 520.261 390.026 520.261C390.923 520.261 391.641 519.913 392.18 519.217L393.256 520.087C392.897 520.609 392.538 520.956 391.821 521.304C391.103 521.826 390.385 521.826 389.667 521.826ZM389.487 514.87C388.949 514.87 388.59 515.043 388.231 515.391C387.872 515.739 387.692 516.261 387.692 516.956H391.282V516.783C391.282 516.087 391.103 515.739 390.744 515.391C390.385 515.043 390.026 514.87 389.487 514.87ZM399 515.217C398.821 515.217 398.462 515.217 398.282 515.217C397.385 515.217 396.846 515.565 396.487 516.261V522H394.513V513.478H396.308V514.348C396.846 513.652 397.385 513.304 398.282 513.304C398.641 513.304 398.821 513.304 399 513.478V515.217Z"
          fill="#3364AE"
        />
      </g>
      <g id="Github" filter="url(#filter12_d)">
        <path
          id="githubBG"
          d="M112.5 593C153.093 593 186 559.869 186 519C186 478.131 153.093 445 112.5 445C71.9071 445 39 478.131 39 519C39 559.869 71.9071 593 112.5 593Z"
          fill="#121212"
        />
        <path
          id="githubBorder"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M112.5 445.75C72.3261 445.75 39.75 478.54 39.75 519C39.75 559.46 72.3261 592.25 112.5 592.25C152.674 592.25 185.25 559.46 185.25 519C185.25 478.54 152.674 445.75 112.5 445.75ZM38.25 519C38.25 477.722 71.4881 444.25 112.5 444.25C153.512 444.25 186.75 477.722 186.75 519C186.75 560.278 153.512 593.75 112.5 593.75C71.4881 593.75 38.25 560.278 38.25 519Z"
          fill="#3364AE"
        />
        <path
          id="githubLogo"
          d="M151.513 515.514L116.194 480.475C114.212 478.508 110.788 478.508 108.806 480.475L101.418 487.804L110.788 497.101C112.951 496.386 115.473 496.922 117.095 498.531C118.897 500.318 119.258 502.821 118.537 504.966L127.547 513.905C129.709 513.19 132.232 513.726 134.034 515.335C136.377 517.659 136.377 521.592 134.034 524.095C131.691 526.419 127.727 526.419 125.204 524.095C123.402 522.307 122.862 519.626 123.943 517.302L115.473 508.899V530.71C116.014 531.067 116.555 531.425 117.095 531.961C119.438 534.285 119.438 538.218 117.095 540.721C114.753 543.045 110.788 543.045 108.265 540.721C105.923 538.397 105.923 534.464 108.265 531.961C108.806 531.425 109.527 530.888 110.248 530.531V508.363C109.527 508.006 108.806 507.648 108.265 506.933C106.463 505.145 105.923 502.464 107.004 500.14L97.8137 491.022L73.4867 515.156C71.5044 517.123 71.5044 520.519 73.4867 522.486L108.806 557.525C110.788 559.492 114.212 559.492 116.194 557.525L151.513 522.486C153.496 520.877 153.496 517.659 151.513 515.514Z"
          fill="#A0A0A0"
        />
      </g>
      <g id="directory" filter="url(#filter13_d)">
        <path
          id="directoryBg"
          d="M569 593C609.869 593 643 559.869 643 519C643 478.131 609.869 445 569 445C528.131 445 495 478.131 495 519C495 559.869 528.131 593 569 593Z"
          fill="#121212"
        />
        <path
          id="directoryBorder"
          d="M569 593C609.869 593 643 559.869 643 519C643 478.131 609.869 445 569 445C528.131 445 495 478.131 495 519C495 559.869 528.131 593 569 593Z"
          stroke="#3364AE"
          strokeWidth="1.5"
        />
        <path
          className="text"
          d="M538 521.821V510.358H541.438C542.524 510.358 543.429 510.537 544.152 511.075C544.876 511.612 545.6 512.149 545.962 513.045C546.324 513.94 546.686 514.836 546.686 515.91V516.448C546.686 517.522 546.505 518.418 545.962 519.313C545.6 520.209 544.876 520.746 544.152 521.284C543.429 521.642 542.343 522 541.438 522H538V521.821ZM539.99 511.791V520.03H541.257C542.343 520.03 543.067 519.672 543.61 519.134C544.152 518.418 544.514 517.522 544.514 516.269V515.552C544.514 514.298 544.152 513.403 543.61 512.687C543.067 511.97 542.343 511.791 541.257 511.791H539.99ZM548.314 511.075C548.314 510.716 548.495 510.537 548.676 510.358C548.857 510.179 549.219 510 549.4 510C549.581 510 549.943 510.179 550.124 510.358C550.305 510.537 550.486 510.716 550.486 511.075C550.486 511.433 550.305 511.612 550.124 511.791C549.943 511.97 549.581 512.149 549.4 512.149C549.219 512.149 548.857 511.97 548.676 511.791C548.495 511.612 548.314 511.254 548.314 511.075ZM550.486 521.821H548.495V513.224H550.486V521.821ZM557 515.015C556.819 515.015 556.457 515.015 556.276 515.015C555.371 515.015 554.829 515.373 554.467 516.089V522H552.476V513.224H554.286V514.119C554.829 513.403 555.371 513.045 556.276 513.045C556.638 513.045 556.819 513.045 557 513.224V515.015Z"
          fill="#3364AE"
        />
        <path
          className="text"
          d="M561.882 521.82C560.647 521.82 559.765 521.459 559.059 520.738C558.353 520.016 558 518.934 558 517.672V517.492C558 516.59 558.176 515.869 558.529 515.147C558.882 514.426 559.235 513.885 559.941 513.525C560.471 513.164 561.176 512.984 561.882 512.984C562.941 512.984 563.824 513.344 564.529 514.066C565.235 514.787 565.412 515.869 565.412 517.311V518.033H559.765C559.765 518.754 560.118 519.295 560.471 519.656C560.824 520.016 561.353 520.197 562.059 520.197C562.941 520.197 563.647 519.836 564.176 519.115L565.235 520.016C564.882 520.557 564.529 520.918 563.824 521.279C563.294 521.82 562.588 521.82 561.882 521.82ZM561.706 514.607C561.176 514.607 560.824 514.787 560.471 515.147C560.118 515.508 559.941 516.049 559.941 516.77H563.471V516.59C563.471 515.869 563.294 515.508 562.941 515.147C562.588 514.787 562.235 514.607 561.706 514.607ZM570.176 520.377C570.706 520.377 571.059 520.197 571.412 520.016C571.765 519.656 571.941 519.475 571.941 518.934H573.706C573.706 519.475 573.529 520.016 573.176 520.377C572.824 520.918 572.471 521.279 571.941 521.459C571.412 521.639 570.882 521.82 570.176 521.82C568.941 521.82 568.059 521.459 567.353 520.738C566.647 520.016 566.294 518.934 566.294 517.492V517.311C566.294 516.049 566.647 514.967 567.353 514.246C568.059 513.525 568.941 512.984 570.176 512.984C571.235 512.984 571.941 513.344 572.647 513.885C573.353 514.426 573.529 515.328 573.706 516.23H571.941C571.941 515.689 571.765 515.328 571.412 514.967C571.059 514.607 570.706 514.426 570.176 514.426C569.647 514.426 569.118 514.607 568.765 515.147C568.412 515.688 568.235 516.23 568.235 517.131V517.492C568.235 518.393 568.412 519.115 568.765 519.656C569.118 520.197 569.471 520.377 570.176 520.377ZM577.412 511V513.164H578.824V514.607H577.412V519.475C577.412 519.836 577.412 520.016 577.588 520.197C577.765 520.377 577.941 520.377 578.294 520.377C578.471 520.377 578.647 520.377 579 520.377V521.82C578.647 522 578.118 522 577.765 522C576.353 522 575.647 521.098 575.647 519.475V514.607H574.235V513.164H575.647V511H577.412Z"
          fill="#3364AE"
        />
        <path
          className="text"
          d="M580 517.412C580 516.529 580.18 515.824 580.538 515.118C580.897 514.412 581.256 513.882 581.974 513.529C582.692 513.176 583.231 513 584.128 513C585.205 513 586.282 513.353 587 514.059C587.718 514.765 588.077 515.824 588.077 516.882V517.412C588.077 518.294 587.897 519 587.538 519.706C587.179 520.412 586.821 520.941 586.103 521.294C585.564 521.647 584.846 521.823 583.949 521.823C582.692 521.823 581.795 521.471 581.077 520.588C580.359 519.882 580 518.823 580 517.412ZM581.974 517.588C581.974 518.471 582.154 519.176 582.513 519.529C582.872 520.059 583.41 520.235 583.949 520.235C584.487 520.235 585.026 520.059 585.385 519.529C585.744 519 585.923 518.294 585.923 517.412C585.923 516.529 585.744 515.824 585.385 515.471C585.026 515.118 584.487 514.765 583.949 514.765C583.41 514.765 582.872 514.941 582.513 515.471C582.154 516 581.974 516.706 581.974 517.588ZM594 515.118C593.821 515.118 593.462 515.118 593.282 515.118C592.385 515.118 591.846 515.471 591.487 516.176V522H589.513V513.353H591.308V514.235C591.846 513.529 592.385 513.177 593.282 513.177C593.641 513.177 593.821 513.176 594 513.353V515.118Z"
          fill="#3364AE"
        />
        <path
          className="text"
          d="M598.093 518.731L599.953 513H602L598.465 522.851C597.907 524.284 596.977 525 595.674 525C595.302 525 595.116 525 594.744 524.821V523.388H595.116C595.674 523.388 596.047 523.388 596.233 523.209C596.419 523.03 596.605 522.672 596.791 522.313L597.163 521.597L594 513.179H596.233L598.093 518.731Z"
          fill="#3364AE"
        />
      </g>
      <g id="system" filter="url(#filter14_d)">
        <path
          id="systemBg"
          d="M797.5 592C838.093 592 871 558.869 871 518C871 477.131 838.093 444 797.5 444C756.907 444 724 477.131 724 518C724 558.869 756.907 592 797.5 592Z"
          fill="#121212"
        />
        <path
          id="systemBorder"
          d="M797.5 592C838.093 592 871 558.869 871 518C871 477.131 838.093 444 797.5 444C756.907 444 724 477.131 724 518C724 558.869 756.907 592 797.5 592Z"
          stroke="#3364AE"
          strokeWidth="1.5"
        />
        <path
          className="text"
          d="M768.962 520.429H766.991V515.429H761.972V520.429H760V509H761.972V513.821H767.17V509H769.141V520.429H768.962ZM775.594 515.964H773.443V520.429H771.472V509H775.415C776.67 509 777.745 509.357 778.462 509.893C779.179 510.429 779.538 511.321 779.538 512.393C779.538 513.107 779.358 513.821 779 514.357C778.641 514.893 778.104 515.25 777.387 515.607L779.896 520.429V520.607H777.745L775.594 515.964ZM773.443 514.357H775.415C776.132 514.357 776.67 514.179 777.028 513.821C777.387 513.464 777.566 513.107 777.566 512.393C777.566 511.857 777.387 511.321 777.028 510.964C776.67 510.607 776.132 510.429 775.415 510.429H773.264V514.357H773.443ZM790.113 518.107C790.113 517.75 789.934 517.571 789.755 517.393C789.396 517.214 789.038 517.036 788.321 516.857C787.604 516.679 787.066 516.5 786.708 516.321C785.811 515.786 785.274 515.25 785.274 514.357C785.274 513.643 785.632 512.929 786.17 512.571C786.708 512.036 787.604 511.857 788.5 511.857C789.575 511.857 790.292 512.036 791.009 512.571C791.726 513.107 791.906 513.643 791.906 514.536H789.934C789.934 514.179 789.755 513.821 789.575 513.643C789.217 513.464 788.858 513.286 788.5 513.286C788.141 513.286 787.783 513.464 787.425 513.643C787.245 513.821 787.066 514.179 787.066 514.357C787.066 514.714 787.245 514.893 787.425 515.071C787.604 515.25 788.141 515.429 788.858 515.607C789.575 515.786 790.113 515.964 790.651 516.143C791.009 516.321 791.368 516.679 791.547 517.036C791.726 517.393 791.906 517.75 791.906 518.286C791.906 519 791.547 519.714 791.009 520.071C790.292 520.607 789.575 520.786 788.5 520.786C787.783 520.786 787.245 520.607 786.708 520.429C786.17 520.25 785.811 519.893 785.453 519.357C785.094 519 784.915 518.464 784.915 517.929H786.708C786.708 518.464 786.887 518.643 787.245 519C787.604 519.179 787.962 519.357 788.5 519.357C789.038 519.357 789.396 519.179 789.575 519C789.934 518.643 790.113 518.464 790.113 518.107ZM796.566 517.75L798.358 512.036H800.33L796.925 521.857C796.387 523.286 795.491 524 794.236 524C793.877 524 793.698 524 793.34 523.821V522.214H793.698C794.236 522.214 794.594 522.214 794.774 522.036C794.953 521.857 795.132 521.5 795.311 521.143L795.67 520.429L792.623 512.036H794.774L796.566 517.75ZM806.245 518.107C806.245 517.75 806.066 517.571 805.887 517.393C805.528 517.214 805.17 517.036 804.453 516.857C803.736 516.679 803.198 516.5 802.84 516.321C801.943 515.786 801.406 515.25 801.406 514.357C801.406 513.643 801.764 512.929 802.302 512.571C802.84 512.036 803.736 511.857 804.632 511.857C805.708 511.857 806.425 512.036 807.142 512.571C807.859 513.107 808.038 513.643 808.038 514.536H806.066C806.066 514.179 805.887 513.821 805.708 513.643C805.349 513.464 804.991 513.286 804.632 513.286C804.274 513.286 803.915 513.464 803.557 513.643C803.377 513.821 803.198 514.179 803.198 514.357C803.198 514.714 803.377 514.893 803.557 515.071C803.736 515.25 804.274 515.429 804.991 515.607C805.708 515.786 806.245 515.964 806.783 516.143C807.142 516.321 807.5 516.679 807.679 517.036C807.858 517.393 808.038 517.75 808.038 518.286C808.038 519 807.679 519.714 807.142 520.071C806.425 520.607 805.708 520.786 804.632 520.786C803.915 520.786 803.377 520.607 802.84 520.429C802.302 520.25 801.943 519.893 801.585 519.357C801.226 519 801.047 518.464 801.047 517.929H802.84C802.84 518.464 803.019 518.643 803.377 519C803.736 519.179 804.094 519.357 804.632 519.357C805.17 519.357 805.528 519.179 805.708 519C806.066 518.643 806.245 518.464 806.245 518.107ZM812.16 509.893V512.036H813.594V513.464H812.16V518.286C812.16 518.643 812.16 518.821 812.34 519C812.519 519.179 812.698 519.179 813.057 519.179C813.236 519.179 813.415 519.179 813.774 519.179V520.607C813.415 520.786 812.877 520.786 812.519 520.786C811.085 520.786 810.368 519.893 810.368 518.286V513.286H808.934V511.857H810.368V509.714H812.16V509.893ZM818.972 520.607C817.717 520.607 816.821 520.25 816.104 519.536C815.387 518.821 815.028 517.75 815.028 516.5V516.321C815.028 515.429 815.208 514.714 815.566 514C815.925 513.286 816.283 512.75 817 512.393C817.538 512.036 818.255 511.857 818.972 511.857C820.047 511.857 820.943 512.214 821.66 512.929C822.377 513.643 822.557 514.714 822.557 516.143V516.857H817C817 517.571 817.358 518.107 817.717 518.464C818.075 518.821 818.613 519 819.33 519C820.226 519 820.943 518.643 821.481 517.929L822.557 518.821C822.198 519.357 821.84 519.714 821.123 520.071C820.226 520.429 819.689 520.607 818.972 520.607ZM818.613 513.286C818.075 513.286 817.717 513.464 817.359 513.821C817 514.179 816.821 514.714 816.821 515.429H820.406V515.25C820.406 514.536 820.226 514.179 819.868 513.821C819.689 513.464 819.151 513.286 818.613 513.286ZM825.604 511.857V512.75C826.142 512.036 827.038 511.679 828.113 511.679C829.189 511.679 830.085 512.036 830.443 512.929C830.981 512.036 831.877 511.679 833.132 511.679C834.028 511.679 834.745 511.857 835.283 512.393C835.821 512.929 836 513.643 836 514.714V520.25H834.028V514.714C834.028 514.179 833.849 513.821 833.67 513.464C833.491 513.107 832.953 513.107 832.415 513.107C832.057 513.107 831.698 513.286 831.34 513.464C830.981 513.643 830.802 514 830.802 514.357V520.25H828.83V514.714C828.83 513.643 828.293 513.286 827.217 513.286C826.5 513.286 825.962 513.643 825.604 514.179V520.25H823.632V511.679H825.604V511.857Z"
          fill="#3364AE"
        />
      </g>
      <g id="background">
        <path
          id="backgroundBG"
          d="M0 295C0 292.848 0.179002 290.696 0.358009 288.543C0.537017 286.391 0.895032 284.239 1.25305 282.087C1.61106 279.935 2.14809 277.962 2.86412 275.81C3.40114 273.658 4.29619 271.685 5.01222 269.712C5.72825 267.739 6.80229 265.766 7.69733 263.793C8.77137 261.821 9.84541 260.027 11.0985 258.234C12.3515 256.44 13.6046 254.647 14.8576 253.033C16.1107 251.418 17.7217 249.804 19.1538 248.19C20.5859 246.576 22.1969 245.141 23.987 243.886C25.5981 242.451 27.3881 241.196 29.1782 240.12C30.9683 238.864 32.7584 237.788 34.7274 236.712C36.6965 235.636 38.4866 234.739 40.6347 234.022C42.6038 233.125 44.5729 232.408 46.721 231.87C48.8691 231.331 50.8381 230.793 52.9862 230.255C55.1343 229.897 57.2824 229.538 59.4305 229.359C61.5786 229.179 63.7267 229 65.8748 229H843.125C845.273 229 847.421 229.179 849.569 229.359C851.718 229.538 853.866 229.897 856.014 230.255C858.162 230.614 860.131 231.152 862.279 231.87C864.427 232.587 866.396 233.304 868.365 234.022C870.334 234.918 872.304 235.815 874.273 236.712C876.242 237.609 878.032 238.864 879.822 240.12C881.612 241.375 883.402 242.63 885.013 243.886C886.624 245.321 888.235 246.755 889.846 248.19C891.457 249.804 892.889 251.239 894.142 253.033C895.574 254.647 896.827 256.44 897.901 258.234C899.155 260.027 900.229 261.821 901.303 263.793C902.377 265.766 903.272 267.56 903.988 269.712C904.883 271.685 905.599 273.658 906.136 275.81C906.673 277.962 907.21 279.935 907.747 282.087C908.105 284.239 908.463 286.391 908.642 288.543C908.821 290.696 909 292.848 909 295C909 297.152 908.821 299.304 908.642 301.457C908.463 303.609 908.105 305.761 907.747 307.913C907.389 310.065 906.852 312.038 906.136 314.19C905.599 316.342 904.704 318.315 903.988 320.288C903.093 322.261 902.198 324.234 901.303 326.207C900.229 328.179 899.155 329.973 897.901 331.766C896.648 333.56 895.395 335.353 894.142 336.967C892.71 338.582 891.278 340.196 889.846 341.81C888.235 343.424 886.803 344.859 885.013 346.114C883.402 347.549 881.612 348.804 879.822 349.88C878.032 351.136 876.242 352.212 874.273 353.288C872.304 354.364 870.513 355.261 868.365 355.978C866.396 356.875 864.427 357.592 862.279 358.13C860.131 358.669 858.162 359.207 856.014 359.745C853.866 360.103 851.718 360.462 849.569 360.641C847.421 360.821 845.273 361 843.125 361H65.6957C63.5476 361 61.3996 360.821 59.2515 360.641C57.1034 360.462 54.9553 360.103 52.8072 359.745C50.6591 359.386 48.69 358.848 46.5419 358.13C44.3939 357.592 42.4248 356.696 40.4557 355.978C38.4866 355.261 36.5175 354.185 34.5485 353.288C32.5794 352.212 30.7893 351.136 28.9992 349.88C27.2091 348.625 25.4191 347.37 23.808 346.114C22.1969 344.859 20.5859 343.245 18.9748 341.81C17.3637 340.375 15.9317 338.761 14.6786 336.967C13.2465 335.353 11.9935 333.56 10.9195 331.766C9.6664 329.973 8.59235 328.179 7.51831 326.207C6.44426 324.234 5.54923 322.44 4.8332 320.288C3.93816 318.315 3.22213 316.342 2.68511 314.19C2.14809 312.038 1.61106 310.065 1.07404 307.913C0.716027 305.761 0.358012 303.609 0.179005 301.457C0.179005 299.304 0 297.152 0 295Z"
          fill="#1C484A"
        />
        <path
          id="backgroundStroke"
          d="M0 295C0 292.848 0.179002 290.696 0.35801 288.543C0.537017 286.391 0.895032 284.239 1.25305 282.087C1.61106 279.935 2.14809 277.962 2.86412 275.81C3.40114 273.658 4.29619 271.685 5.01221 269.712C5.72824 267.739 6.80229 265.766 7.69733 263.793C8.77137 261.821 9.84541 260.027 11.0985 258.234C12.3515 256.44 13.6046 254.647 14.8576 253.033C16.1107 251.418 17.7217 249.804 19.1538 248.19C20.5859 246.576 22.1969 245.141 23.987 243.886C25.5981 242.451 27.3882 241.196 29.1782 240.12C30.9683 238.864 32.7584 237.788 34.7274 236.712C36.6965 235.636 38.4866 234.739 40.6347 234.022C42.6038 233.125 44.5729 232.408 46.721 231.87C48.8691 231.331 50.8381 230.793 52.9862 230.255C55.1343 229.897 57.2824 229.538 59.4305 229.359C61.5786 229.179 63.7267 229 65.8748 229H843.125C845.273 229 847.421 229.179 849.569 229.359C851.718 229.538 853.866 229.897 856.014 230.255C858.162 230.614 860.131 231.152 862.279 231.87C864.427 232.587 866.396 233.304 868.365 234.022C870.334 234.918 872.304 235.815 874.273 236.712C876.242 237.609 878.032 238.864 879.822 240.12C881.612 241.375 883.402 242.63 885.013 243.886C886.624 245.321 888.235 246.755 889.846 248.19C891.457 249.804 892.889 251.239 894.142 253.033C895.574 254.647 896.827 256.44 897.901 258.234C899.155 260.027 900.229 261.821 901.303 263.793C902.377 265.766 903.272 267.56 903.988 269.712C904.883 271.685 905.599 273.658 906.136 275.81C906.673 277.962 907.21 279.935 907.747 282.087C908.105 284.239 908.463 286.391 908.642 288.543C908.821 290.696 909 292.848 909 295C909 297.152 908.821 299.304 908.642 301.457C908.463 303.609 908.105 305.761 907.747 307.913C907.389 310.065 906.852 312.038 906.136 314.19C905.599 316.342 904.704 318.315 903.988 320.288C903.093 322.261 902.198 324.234 901.303 326.207C900.229 328.179 899.155 329.973 897.901 331.766C896.648 333.56 895.395 335.353 894.142 336.967C892.71 338.582 891.278 340.196 889.846 341.81C888.235 343.424 886.803 344.859 885.013 346.114C883.402 347.549 881.612 348.804 879.822 349.88C878.032 351.136 876.242 352.212 874.273 353.288C872.304 354.364 870.513 355.261 868.365 355.978C866.396 356.875 864.427 357.592 862.279 358.13C860.131 358.669 858.162 359.207 856.014 359.745C853.866 360.103 851.718 360.462 849.569 360.641C847.421 360.821 845.273 361 843.125 361H65.6957C63.5477 361 61.3996 360.821 59.2515 360.641C57.1034 360.462 54.9553 360.103 52.8072 359.745C50.6591 359.386 48.69 358.848 46.5419 358.13C44.3939 357.592 42.4248 356.696 40.4557 355.978C38.4866 355.261 36.5175 354.185 34.5484 353.288C32.5794 352.212 30.7893 351.136 28.9992 349.88C27.2091 348.625 25.4191 347.37 23.808 346.114C22.1969 344.859 20.5859 343.245 18.9748 341.81C17.3637 340.375 15.9317 338.761 14.6786 336.967C13.2465 335.353 11.9935 333.56 10.9195 331.766C9.6664 329.973 8.59235 328.179 7.51831 326.207C6.44426 324.234 5.54923 322.44 4.8332 320.288C3.93816 318.315 3.22213 316.342 2.68511 314.19C2.14809 312.038 1.61106 310.065 1.07404 307.913C0.716027 305.761 0.358012 303.609 0.179005 301.457C0.179005 299.304 0 297.152 0 295Z"
          stroke="#215E60"
          strokeWidth="1.5"
        />
      </g>
      <g id="user" filter="url(#filterPolicy)">
        <path
          id="Vector_56"
          d="M314 272.127L314.086 272.063L314.161 271.988C314.573 271.58 315.002 271.284 315.506 270.936C315.741 270.773 315.993 270.599 316.267 270.398C316.718 270.127 317.125 269.858 317.504 269.608L317.514 269.601C317.921 269.332 318.295 269.085 318.708 268.84C319.486 268.377 320.273 268.062 321.181 267.702C322.078 267.346 322.937 267.006 323.965 266.667L324.006 266.653L324.047 266.637C324.675 266.388 325.42 266.243 326.237 266.085C326.373 266.058 326.512 266.032 326.652 266.004C327.536 265.829 328.488 265.678 329.226 265.678C329.72 265.678 330.249 265.632 330.72 265.591C330.75 265.588 330.78 265.586 330.81 265.583C331.33 265.538 331.807 265.5 332.271 265.5H578.729C579.804 265.5 580.58 265.503 581.508 265.654C582.027 265.755 582.576 265.804 583.036 265.846L583.073 265.849C583.583 265.895 583.993 265.933 584.348 266.004C584.488 266.032 584.627 266.058 584.763 266.085C585.58 266.243 586.325 266.388 586.953 266.637C587.338 266.79 587.741 266.919 588.095 267.033C588.202 267.068 588.305 267.101 588.401 267.133C588.843 267.279 589.26 267.431 589.706 267.652L589.761 267.679L589.819 267.702C590.727 268.062 591.514 268.377 592.292 268.84C592.545 268.99 592.793 269.125 593.015 269.245L593.102 269.292C593.296 269.396 593.466 269.488 593.633 269.584C594.009 269.799 594.285 269.99 594.51 270.213L594.641 270.343L594.8 270.437C595.608 270.918 596.223 271.378 596.839 271.988C597.233 272.379 597.623 272.717 597.973 273.021L597.987 273.033C598.349 273.347 598.671 273.627 598.988 273.941C599.725 274.671 600.358 275.303 600.818 275.911L600.883 275.996L600.959 276.071C601.37 276.479 601.669 276.904 602.02 277.403C602.196 277.653 602.385 277.923 602.609 278.219C603.091 278.854 603.586 279.67 604.134 280.576C604.6 281.345 604.917 282.123 605.28 283.023C605.639 283.912 605.982 284.762 606.324 285.78L606.339 285.822L606.355 285.863C606.605 286.483 606.75 287.217 606.91 288.027C606.937 288.162 606.964 288.3 606.992 288.439C607.169 289.316 607.321 290.255 607.321 290.982C607.321 291.474 607.367 292 607.408 292.466L607.416 292.556C607.461 293.071 607.5 293.542 607.5 294C607.5 295.074 607.497 295.844 607.342 296.769C607.247 297.329 607.198 297.843 607.156 298.282L607.149 298.361C607.103 298.833 607.064 299.204 606.992 299.561C606.964 299.7 606.937 299.838 606.91 299.973C606.75 300.783 606.605 301.517 606.355 302.137C606.201 302.52 606.069 302.92 605.954 303.271C605.919 303.377 605.886 303.478 605.854 303.574C605.707 304.011 605.554 304.422 605.332 304.863C605.079 305.364 604.895 305.802 604.741 306.167C604.715 306.23 604.689 306.291 604.664 306.35C604.493 306.753 604.347 307.074 604.134 307.424C603.982 307.675 603.846 307.921 603.725 308.142L603.677 308.23C603.572 308.421 603.48 308.589 603.384 308.754C603.167 309.125 602.975 309.398 602.75 309.621C602.285 310.082 601.945 310.587 601.69 310.966L601.665 311.003C601.385 311.419 601.195 311.695 600.959 311.929C600.565 312.319 600.224 312.705 599.918 313.052L599.905 313.066C599.587 313.426 599.306 313.744 598.988 314.059C598.252 314.788 597.614 315.416 597 315.873C596.629 316.149 596.215 316.468 595.815 316.776C595.432 317.071 595.062 317.357 594.731 317.604C594.28 317.874 593.874 318.143 593.496 318.393L593.486 318.399C593.079 318.668 592.705 318.915 592.292 319.16C591.514 319.623 590.727 319.938 589.819 320.298C588.922 320.654 588.063 320.994 587.035 321.333L586.994 321.347L586.953 321.363C586.325 321.612 585.58 321.757 584.763 321.915C584.627 321.942 584.488 321.968 584.348 321.996C583.464 322.171 582.512 322.322 581.774 322.322H581.651L581.53 322.343C580.592 322.497 579.812 322.5 578.729 322.5H332.271C331.188 322.5 330.408 322.497 329.47 322.343C328.906 322.249 328.389 322.201 327.946 322.159L327.867 322.152C327.39 322.107 327.014 322.068 326.652 321.996C326.512 321.968 326.373 321.942 326.237 321.915C325.42 321.757 324.675 321.612 324.047 321.363C323.662 321.21 323.259 321.081 322.905 320.967C322.798 320.932 322.695 320.899 322.599 320.867C322.157 320.721 321.74 320.569 321.294 320.348L321.239 320.321L321.181 320.298C320.273 319.938 319.486 319.623 318.708 319.16C318.455 319.01 318.207 318.875 317.985 318.755C317.955 318.739 317.926 318.723 317.897 318.708C317.704 318.604 317.533 318.512 317.367 318.416C316.991 318.201 316.715 318.01 316.49 317.787L316.359 317.657L316.2 317.563C315.392 317.082 314.777 316.622 314.161 316.012C313.767 315.621 313.377 315.283 313.027 314.979L313.013 314.967C312.651 314.653 312.329 314.373 312.012 314.059C311.275 313.329 310.642 312.697 310.182 312.089L310.117 312.004L310.041 311.929C309.63 311.521 309.331 311.096 308.98 310.597C308.804 310.347 308.614 310.077 308.39 309.781C307.909 309.146 307.414 308.331 306.866 307.424C306.4 306.655 306.083 305.877 305.72 304.977C305.361 304.088 305.018 303.238 304.676 302.22C304.351 301.254 304.187 300.449 304.008 299.561C303.831 298.684 303.679 297.745 303.679 297.018V296.893L303.658 296.769C303.503 295.844 303.5 295.074 303.5 294C303.5 292.926 303.503 292.156 303.658 291.231C303.753 290.671 303.802 290.157 303.844 289.718C303.846 289.692 303.849 289.665 303.851 289.639C303.897 289.167 303.936 288.796 304.008 288.439C304.036 288.3 304.063 288.162 304.09 288.027C304.25 287.217 304.395 286.483 304.645 285.863C304.799 285.48 304.931 285.08 305.046 284.729C305.08 284.623 305.114 284.522 305.146 284.426C305.293 283.989 305.446 283.578 305.668 283.137C305.921 282.636 306.105 282.198 306.259 281.833C306.285 281.77 306.311 281.709 306.336 281.65C306.507 281.247 306.653 280.926 306.866 280.576C307.018 280.325 307.154 280.079 307.275 279.858C307.291 279.829 307.307 279.8 307.322 279.772C307.428 279.58 307.52 279.411 307.616 279.246C307.833 278.875 308.025 278.602 308.25 278.379C308.715 277.918 309.055 277.413 309.31 277.034C309.318 277.021 309.326 277.009 309.335 276.997C309.615 276.581 309.805 276.305 310.041 276.071C310.435 275.681 310.777 275.294 311.083 274.947L311.095 274.934C311.413 274.574 311.694 274.256 312.012 273.941C312.748 273.212 313.386 272.584 314 272.127Z"
          fill="#277F82"
          stroke="white"
          stroke-width="3"
        />
        <path
          id="FEDERATED USER ATTRIBUTES"
          d="M325.82 294.975H320.098V301H317.627V286.781H326.66V288.773H320.098V293.002H325.82V294.975ZM336.934 294.652H331.094V299.027H337.92V301H328.623V286.781H337.852V288.773H331.094V292.699H336.934V294.652ZM339.932 301V286.781H344.131C345.387 286.781 346.501 287.061 347.471 287.621C348.447 288.181 349.202 288.975 349.736 290.004C350.27 291.033 350.537 292.211 350.537 293.539V294.252C350.537 295.6 350.267 296.785 349.727 297.807C349.193 298.829 348.428 299.617 347.432 300.17C346.442 300.723 345.306 301 344.023 301H339.932ZM342.402 288.773V299.027H344.014C345.309 299.027 346.302 298.624 346.992 297.816C347.689 297.003 348.044 295.837 348.057 294.32V293.529C348.057 291.986 347.721 290.808 347.051 289.994C346.38 289.18 345.407 288.773 344.131 288.773H342.402ZM361.309 294.652H355.469V299.027H362.295V301H352.998V286.781H362.227V288.773H355.469V292.699H361.309V294.652ZM369.531 295.521H366.777V301H364.307V286.781H369.307C370.947 286.781 372.214 287.149 373.105 287.885C373.997 288.62 374.443 289.685 374.443 291.078C374.443 292.029 374.212 292.826 373.75 293.471C373.294 294.109 372.656 294.6 371.836 294.945L375.029 300.873V301H372.383L369.531 295.521ZM366.777 293.539H369.316C370.15 293.539 370.801 293.331 371.27 292.914C371.738 292.491 371.973 291.915 371.973 291.186C371.973 290.424 371.755 289.835 371.318 289.418C370.889 289.001 370.244 288.786 369.385 288.773H366.777V293.539ZM384.746 297.689H379.238L378.086 301H375.518L380.889 286.781H383.105L388.486 301H385.908L384.746 297.689ZM379.932 295.697H384.053L381.992 289.799L379.932 295.697ZM399.209 288.773H394.775V301H392.324V288.773H387.93V286.781H399.209V288.773ZM409.395 294.652H403.555V299.027H410.381V301H401.084V286.781H410.312V288.773H403.555V292.699H409.395V294.652ZM412.393 301V286.781H416.592C417.848 286.781 418.962 287.061 419.932 287.621C420.908 288.181 421.663 288.975 422.197 290.004C422.731 291.033 422.998 292.211 422.998 293.539V294.252C422.998 295.6 422.728 296.785 422.188 297.807C421.654 298.829 420.889 299.617 419.893 300.17C418.903 300.723 417.767 301 416.484 301H412.393ZM414.863 288.773V299.027H416.475C417.77 299.027 418.763 298.624 419.453 297.816C420.15 297.003 420.505 295.837 420.518 294.32V293.529C420.518 291.986 420.182 290.808 419.512 289.994C418.841 289.18 417.868 288.773 416.592 288.773H414.863ZM440.84 286.781V296.283C440.84 297.794 440.355 298.992 439.385 299.877C438.421 300.756 437.135 301.195 435.527 301.195C433.9 301.195 432.607 300.762 431.65 299.896C430.693 299.024 430.215 297.816 430.215 296.273V286.781H432.676V296.293C432.676 297.243 432.917 297.969 433.398 298.471C433.88 298.972 434.59 299.223 435.527 299.223C437.428 299.223 438.379 298.22 438.379 296.215V286.781H440.84ZM450.918 297.338C450.918 296.713 450.697 296.231 450.254 295.893C449.818 295.554 449.027 295.212 447.881 294.867C446.735 294.522 445.824 294.138 445.146 293.715C443.851 292.901 443.203 291.84 443.203 290.531C443.203 289.385 443.669 288.441 444.6 287.699C445.537 286.957 446.751 286.586 448.242 286.586C449.232 286.586 450.114 286.768 450.889 287.133C451.663 287.497 452.272 288.018 452.715 288.695C453.158 289.366 453.379 290.111 453.379 290.932H450.918C450.918 290.189 450.684 289.61 450.215 289.193C449.753 288.77 449.089 288.559 448.223 288.559C447.415 288.559 446.787 288.731 446.338 289.076C445.895 289.421 445.674 289.903 445.674 290.521C445.674 291.042 445.915 291.479 446.396 291.83C446.878 292.175 447.673 292.514 448.779 292.846C449.886 293.171 450.775 293.546 451.445 293.969C452.116 294.385 452.607 294.867 452.92 295.414C453.232 295.954 453.389 296.589 453.389 297.318C453.389 298.503 452.933 299.447 452.021 300.15C451.117 300.847 449.886 301.195 448.33 301.195C447.301 301.195 446.354 301.007 445.488 300.629C444.629 300.245 443.958 299.717 443.477 299.047C443.001 298.376 442.764 297.595 442.764 296.703H445.234C445.234 297.51 445.501 298.135 446.035 298.578C446.569 299.021 447.334 299.242 448.33 299.242C449.189 299.242 449.834 299.07 450.264 298.725C450.7 298.373 450.918 297.911 450.918 297.338ZM463.867 294.652H458.027V299.027H464.854V301H455.557V286.781H464.785V288.773H458.027V292.699H463.867V294.652ZM472.09 295.521H469.336V301H466.865V286.781H471.865C473.506 286.781 474.772 287.149 475.664 287.885C476.556 288.62 477.002 289.685 477.002 291.078C477.002 292.029 476.771 292.826 476.309 293.471C475.853 294.109 475.215 294.6 474.395 294.945L477.588 300.873V301H474.941L472.09 295.521ZM469.336 293.539H471.875C472.708 293.539 473.359 293.331 473.828 292.914C474.297 292.491 474.531 291.915 474.531 291.186C474.531 290.424 474.313 289.835 473.877 289.418C473.447 289.001 472.803 288.786 471.943 288.773H469.336V293.539ZM492.285 297.689H486.777L485.625 301H483.057L488.428 286.781H490.645L496.025 301H493.447L492.285 297.689ZM487.471 295.697H491.592L489.531 289.799L487.471 295.697ZM506.748 288.773H502.314V301H499.863V288.773H495.469V286.781H506.748V288.773ZM519.053 288.773H514.619V301H512.168V288.773H507.773V286.781H519.053V288.773ZM526.152 295.521H523.398V301H520.928V286.781H525.928C527.568 286.781 528.835 287.149 529.727 287.885C530.618 288.62 531.064 289.685 531.064 291.078C531.064 292.029 530.833 292.826 530.371 293.471C529.915 294.109 529.277 294.6 528.457 294.945L531.65 300.873V301H529.004L526.152 295.521ZM523.398 293.539H525.938C526.771 293.539 527.422 293.331 527.891 292.914C528.359 292.491 528.594 291.915 528.594 291.186C528.594 290.424 528.376 289.835 527.939 289.418C527.51 289.001 526.865 288.786 526.006 288.773H523.398V293.539ZM536.016 301H533.555V286.781H536.016V301ZM539.053 301V286.781H543.926C545.534 286.781 546.758 287.104 547.598 287.748C548.438 288.393 548.857 289.353 548.857 290.629C548.857 291.28 548.682 291.866 548.33 292.387C547.979 292.908 547.464 293.311 546.787 293.598C547.555 293.806 548.148 294.2 548.564 294.779C548.988 295.352 549.199 296.042 549.199 296.85C549.199 298.184 548.77 299.21 547.91 299.926C547.057 300.642 545.833 301 544.238 301H539.053ZM541.523 294.584V299.027H544.268C545.042 299.027 545.648 298.835 546.084 298.451C546.52 298.067 546.738 297.533 546.738 296.85C546.738 295.372 545.983 294.617 544.473 294.584H541.523ZM541.523 292.768H543.945C544.714 292.768 545.312 292.595 545.742 292.25C546.178 291.898 546.396 291.404 546.396 290.766C546.396 290.062 546.195 289.555 545.791 289.242C545.394 288.93 544.772 288.773 543.926 288.773H541.523V292.768ZM562.07 286.781V296.283C562.07 297.794 561.585 298.992 560.615 299.877C559.652 300.756 558.366 301.195 556.758 301.195C555.13 301.195 553.838 300.762 552.881 299.896C551.924 299.024 551.445 297.816 551.445 296.273V286.781H553.906V296.293C553.906 297.243 554.147 297.969 554.629 298.471C555.111 298.972 555.82 299.223 556.758 299.223C558.659 299.223 559.609 298.22 559.609 296.215V286.781H562.07ZM574.99 288.773H570.557V301H568.105V288.773H563.711V286.781H574.99V288.773ZM585.176 294.652H579.336V299.027H586.162V301H576.865V286.781H586.094V288.773H579.336V292.699H585.176V294.652ZM595.605 297.338C595.605 296.713 595.384 296.231 594.941 295.893C594.505 295.554 593.714 295.212 592.568 294.867C591.423 294.522 590.511 294.138 589.834 293.715C588.538 292.901 587.891 291.84 587.891 290.531C587.891 289.385 588.356 288.441 589.287 287.699C590.225 286.957 591.439 286.586 592.93 286.586C593.919 286.586 594.801 286.768 595.576 287.133C596.351 287.497 596.96 288.018 597.402 288.695C597.845 289.366 598.066 290.111 598.066 290.932H595.605C595.605 290.189 595.371 289.61 594.902 289.193C594.44 288.77 593.776 288.559 592.91 288.559C592.103 288.559 591.475 288.731 591.025 289.076C590.583 289.421 590.361 289.903 590.361 290.521C590.361 291.042 590.602 291.479 591.084 291.83C591.566 292.175 592.36 292.514 593.467 292.846C594.574 293.171 595.462 293.546 596.133 293.969C596.803 294.385 597.295 294.867 597.607 295.414C597.92 295.954 598.076 296.589 598.076 297.318C598.076 298.503 597.62 299.447 596.709 300.15C595.804 300.847 594.574 301.195 593.018 301.195C591.989 301.195 591.042 301.007 590.176 300.629C589.316 300.245 588.646 299.717 588.164 299.047C587.689 298.376 587.451 297.595 587.451 296.703H589.922C589.922 297.51 590.189 298.135 590.723 298.578C591.257 299.021 592.021 299.242 593.018 299.242C593.877 299.242 594.521 299.07 594.951 298.725C595.387 298.373 595.605 297.911 595.605 297.338Z"
          fill="white"
        />
      </g>
      <g id="decision" filter="url(#filterPolicy)">
        <path
          id="Vector_57"
          d="M314 272.127L314.086 272.063L314.161 271.988C314.573 271.58 315.002 271.284 315.506 270.936C315.741 270.773 315.993 270.599 316.267 270.398C316.718 270.127 317.125 269.858 317.504 269.608L317.514 269.601C317.921 269.332 318.295 269.085 318.708 268.84C319.486 268.377 320.273 268.062 321.181 267.702C322.078 267.346 322.937 267.006 323.965 266.667L324.006 266.653L324.047 266.637C324.675 266.388 325.42 266.243 326.237 266.085C326.373 266.058 326.512 266.032 326.652 266.004C327.536 265.829 328.488 265.678 329.226 265.678C329.72 265.678 330.249 265.632 330.72 265.591C330.75 265.588 330.78 265.586 330.81 265.583C331.33 265.538 331.807 265.5 332.271 265.5H578.729C579.804 265.5 580.58 265.503 581.508 265.654C582.027 265.755 582.576 265.804 583.036 265.846L583.073 265.849C583.583 265.895 583.993 265.933 584.348 266.004C584.488 266.032 584.627 266.058 584.763 266.085C585.58 266.243 586.325 266.388 586.953 266.637C587.338 266.79 587.741 266.919 588.095 267.033C588.202 267.068 588.305 267.101 588.401 267.133C588.843 267.279 589.26 267.431 589.706 267.652L589.761 267.679L589.819 267.702C590.727 268.062 591.514 268.377 592.292 268.84C592.545 268.99 592.793 269.125 593.015 269.245L593.102 269.292C593.296 269.396 593.466 269.488 593.633 269.584C594.009 269.799 594.285 269.99 594.51 270.213L594.641 270.343L594.8 270.437C595.608 270.918 596.223 271.378 596.839 271.988C597.233 272.379 597.623 272.717 597.973 273.021L597.987 273.033C598.349 273.347 598.671 273.627 598.988 273.941C599.725 274.671 600.358 275.303 600.818 275.911L600.883 275.996L600.959 276.071C601.37 276.479 601.669 276.904 602.02 277.403C602.196 277.653 602.385 277.923 602.609 278.219C603.091 278.854 603.586 279.67 604.134 280.576C604.6 281.345 604.917 282.123 605.28 283.023C605.639 283.912 605.982 284.762 606.324 285.78L606.339 285.822L606.355 285.863C606.605 286.483 606.75 287.217 606.91 288.027C606.937 288.162 606.964 288.3 606.992 288.439C607.169 289.316 607.321 290.255 607.321 290.982C607.321 291.474 607.367 292 607.408 292.466L607.416 292.556C607.461 293.071 607.5 293.542 607.5 294C607.5 295.074 607.497 295.844 607.342 296.769C607.247 297.329 607.198 297.843 607.156 298.282L607.149 298.361C607.103 298.833 607.064 299.204 606.992 299.561C606.964 299.7 606.937 299.838 606.91 299.973C606.75 300.783 606.605 301.517 606.355 302.137C606.201 302.52 606.069 302.92 605.954 303.271C605.919 303.377 605.886 303.478 605.854 303.574C605.707 304.011 605.554 304.422 605.332 304.863C605.079 305.364 604.895 305.802 604.741 306.167C604.715 306.23 604.689 306.291 604.664 306.35C604.493 306.753 604.347 307.074 604.134 307.424C603.982 307.675 603.846 307.921 603.725 308.142L603.677 308.23C603.572 308.421 603.48 308.589 603.384 308.754C603.167 309.125 602.975 309.398 602.75 309.621C602.285 310.082 601.945 310.587 601.69 310.966L601.665 311.003C601.385 311.419 601.195 311.695 600.959 311.929C600.565 312.319 600.224 312.705 599.918 313.052L599.905 313.066C599.587 313.426 599.306 313.744 598.988 314.059C598.252 314.788 597.614 315.416 597 315.873C596.629 316.149 596.215 316.468 595.815 316.776C595.432 317.071 595.062 317.357 594.731 317.604C594.28 317.874 593.874 318.143 593.496 318.393L593.486 318.399C593.079 318.668 592.705 318.915 592.292 319.16C591.514 319.623 590.727 319.938 589.819 320.298C588.922 320.654 588.063 320.994 587.035 321.333L586.994 321.347L586.953 321.363C586.325 321.612 585.58 321.757 584.763 321.915C584.627 321.942 584.488 321.968 584.348 321.996C583.464 322.171 582.512 322.322 581.774 322.322H581.651L581.53 322.343C580.592 322.497 579.812 322.5 578.729 322.5H332.271C331.188 322.5 330.408 322.497 329.47 322.343C328.906 322.249 328.389 322.201 327.946 322.159L327.867 322.152C327.39 322.107 327.014 322.068 326.652 321.996C326.512 321.968 326.373 321.942 326.237 321.915C325.42 321.757 324.675 321.612 324.047 321.363C323.662 321.21 323.259 321.081 322.905 320.967C322.798 320.932 322.695 320.899 322.599 320.867C322.157 320.721 321.74 320.569 321.294 320.348L321.239 320.321L321.181 320.298C320.273 319.938 319.486 319.623 318.708 319.16C318.455 319.01 318.207 318.875 317.985 318.755C317.955 318.739 317.926 318.723 317.897 318.708C317.704 318.604 317.533 318.512 317.367 318.416C316.991 318.201 316.715 318.01 316.49 317.787L316.359 317.657L316.2 317.563C315.392 317.082 314.777 316.622 314.161 316.012C313.767 315.621 313.377 315.283 313.027 314.979L313.013 314.967C312.651 314.653 312.329 314.373 312.012 314.059C311.275 313.329 310.642 312.697 310.182 312.089L310.117 312.004L310.041 311.929C309.63 311.521 309.331 311.096 308.98 310.597C308.804 310.347 308.614 310.077 308.39 309.781C307.909 309.146 307.414 308.331 306.866 307.424C306.4 306.655 306.083 305.877 305.72 304.977C305.361 304.088 305.018 303.238 304.676 302.22C304.351 301.254 304.187 300.449 304.008 299.561C303.831 298.684 303.679 297.745 303.679 297.018V296.893L303.658 296.769C303.503 295.844 303.5 295.074 303.5 294C303.5 292.926 303.503 292.156 303.658 291.231C303.753 290.671 303.802 290.157 303.844 289.718C303.846 289.692 303.849 289.665 303.851 289.639C303.897 289.167 303.936 288.796 304.008 288.439C304.036 288.3 304.063 288.162 304.09 288.027C304.25 287.217 304.395 286.483 304.645 285.863C304.799 285.48 304.931 285.08 305.046 284.729C305.08 284.623 305.114 284.522 305.146 284.426C305.293 283.989 305.446 283.578 305.668 283.137C305.921 282.636 306.105 282.198 306.259 281.833C306.285 281.77 306.311 281.709 306.336 281.65C306.507 281.247 306.653 280.926 306.866 280.576C307.018 280.325 307.154 280.079 307.275 279.858C307.291 279.829 307.307 279.8 307.322 279.772C307.428 279.58 307.52 279.411 307.616 279.246C307.833 278.875 308.025 278.602 308.25 278.379C308.715 277.918 309.055 277.413 309.31 277.034C309.318 277.021 309.326 277.009 309.335 276.997C309.615 276.581 309.805 276.305 310.041 276.071C310.435 275.681 310.777 275.294 311.083 274.947L311.095 274.934C311.413 274.574 311.694 274.256 312.012 273.941C312.748 273.212 313.386 272.584 314 272.127Z"
          fill="#277F82"
          stroke="white"
          stroke-width="3"
        />
        <path
          id="CENTRALIZED DECISION LOGS"
          d="M328.506 296.371C328.363 297.888 327.803 299.073 326.826 299.926C325.85 300.772 324.551 301.195 322.93 301.195C321.797 301.195 320.798 300.928 319.932 300.395C319.072 299.854 318.408 299.089 317.939 298.1C317.471 297.11 317.227 295.961 317.207 294.652V293.324C317.207 291.983 317.445 290.801 317.92 289.779C318.395 288.757 319.076 287.969 319.961 287.416C320.853 286.863 321.882 286.586 323.047 286.586C324.616 286.586 325.879 287.012 326.836 287.865C327.793 288.718 328.35 289.923 328.506 291.479H326.045C325.928 290.456 325.628 289.721 325.146 289.271C324.671 288.816 323.971 288.588 323.047 288.588C321.973 288.588 321.146 288.982 320.566 289.77C319.993 290.551 319.701 291.7 319.688 293.217V294.477C319.688 296.013 319.961 297.185 320.508 297.992C321.061 298.799 321.868 299.203 322.93 299.203C323.9 299.203 324.629 298.985 325.117 298.549C325.605 298.113 325.915 297.387 326.045 296.371H328.506ZM339.033 294.652H333.193V299.027H340.02V301H330.723V286.781H339.951V288.773H333.193V292.699H339.033V294.652ZM353.311 301H350.84L344.502 290.912V301H342.031V286.781H344.502L350.859 296.908V286.781H353.311V301ZM366.211 288.773H361.777V301H359.326V288.773H354.932V286.781H366.211V288.773ZM373.311 295.521H370.557V301H368.086V286.781H373.086C374.727 286.781 375.993 287.149 376.885 287.885C377.777 288.62 378.223 289.685 378.223 291.078C378.223 292.029 377.992 292.826 377.529 293.471C377.074 294.109 376.436 294.6 375.615 294.945L378.809 300.873V301H376.162L373.311 295.521ZM370.557 293.539H373.096C373.929 293.539 374.58 293.331 375.049 292.914C375.518 292.491 375.752 291.915 375.752 291.186C375.752 290.424 375.534 289.835 375.098 289.418C374.668 289.001 374.023 288.786 373.164 288.773H370.557V293.539ZM388.525 297.689H383.018L381.865 301H379.297L384.668 286.781H386.885L392.266 301H389.688L388.525 297.689ZM383.711 295.697H387.832L385.771 289.799L383.711 295.697ZM396.357 299.027H402.812V301H393.887V286.781H396.357V299.027ZM407.314 301H404.854V286.781H407.314V301ZM412.676 299.027H420.273V301H409.688V299.398L417.041 288.773H409.736V286.781H420.039V288.344L412.676 299.027ZM430.713 294.652H424.873V299.027H431.699V301H422.402V286.781H431.631V288.773H424.873V292.699H430.713V294.652ZM433.711 301V286.781H437.91C439.167 286.781 440.28 287.061 441.25 287.621C442.227 288.181 442.982 288.975 443.516 290.004C444.049 291.033 444.316 292.211 444.316 293.539V294.252C444.316 295.6 444.046 296.785 443.506 297.807C442.972 298.829 442.207 299.617 441.211 300.17C440.221 300.723 439.085 301 437.803 301H433.711ZM436.182 288.773V299.027H437.793C439.089 299.027 440.081 298.624 440.771 297.816C441.468 297.003 441.823 295.837 441.836 294.32V293.529C441.836 291.986 441.501 290.808 440.83 289.994C440.16 289.18 439.186 288.773 437.91 288.773H436.182ZM451.758 301V286.781H455.957C457.214 286.781 458.327 287.061 459.297 287.621C460.273 288.181 461.029 288.975 461.562 290.004C462.096 291.033 462.363 292.211 462.363 293.539V294.252C462.363 295.6 462.093 296.785 461.553 297.807C461.019 298.829 460.254 299.617 459.258 300.17C458.268 300.723 457.132 301 455.85 301H451.758ZM454.229 288.773V299.027H455.84C457.135 299.027 458.128 298.624 458.818 297.816C459.515 297.003 459.87 295.837 459.883 294.32V293.529C459.883 291.986 459.548 290.808 458.877 289.994C458.206 289.18 457.233 288.773 455.957 288.773H454.229ZM473.135 294.652H467.295V299.027H474.121V301H464.824V286.781H474.053V288.773H467.295V292.699H473.135V294.652ZM486.982 296.371C486.839 297.888 486.279 299.073 485.303 299.926C484.326 300.772 483.027 301.195 481.406 301.195C480.273 301.195 479.274 300.928 478.408 300.395C477.549 299.854 476.885 299.089 476.416 298.1C475.947 297.11 475.703 295.961 475.684 294.652V293.324C475.684 291.983 475.921 290.801 476.396 289.779C476.872 288.757 477.552 287.969 478.438 287.416C479.329 286.863 480.358 286.586 481.523 286.586C483.092 286.586 484.355 287.012 485.312 287.865C486.27 288.718 486.826 289.923 486.982 291.479H484.521C484.404 290.456 484.105 289.721 483.623 289.271C483.148 288.816 482.448 288.588 481.523 288.588C480.449 288.588 479.622 288.982 479.043 289.77C478.47 290.551 478.177 291.7 478.164 293.217V294.477C478.164 296.013 478.438 297.185 478.984 297.992C479.538 298.799 480.345 299.203 481.406 299.203C482.376 299.203 483.105 298.985 483.594 298.549C484.082 298.113 484.391 297.387 484.521 296.371H486.982ZM491.807 301H489.346V286.781H491.807V301ZM502.275 297.338C502.275 296.713 502.054 296.231 501.611 295.893C501.175 295.554 500.384 295.212 499.238 294.867C498.092 294.522 497.181 294.138 496.504 293.715C495.208 292.901 494.561 291.84 494.561 290.531C494.561 289.385 495.026 288.441 495.957 287.699C496.895 286.957 498.109 286.586 499.6 286.586C500.589 286.586 501.471 286.768 502.246 287.133C503.021 287.497 503.63 288.018 504.072 288.695C504.515 289.366 504.736 290.111 504.736 290.932H502.275C502.275 290.189 502.041 289.61 501.572 289.193C501.11 288.77 500.446 288.559 499.58 288.559C498.773 288.559 498.145 288.731 497.695 289.076C497.253 289.421 497.031 289.903 497.031 290.521C497.031 291.042 497.272 291.479 497.754 291.83C498.236 292.175 499.03 292.514 500.137 292.846C501.243 293.171 502.132 293.546 502.803 293.969C503.473 294.385 503.965 294.867 504.277 295.414C504.59 295.954 504.746 296.589 504.746 297.318C504.746 298.503 504.29 299.447 503.379 300.15C502.474 300.847 501.243 301.195 499.688 301.195C498.659 301.195 497.712 301.007 496.846 300.629C495.986 300.245 495.316 299.717 494.834 299.047C494.359 298.376 494.121 297.595 494.121 296.703H496.592C496.592 297.51 496.859 298.135 497.393 298.578C497.926 299.021 498.691 299.242 499.688 299.242C500.547 299.242 501.191 299.07 501.621 298.725C502.057 298.373 502.275 297.911 502.275 297.338ZM509.521 301H507.061V286.781H509.521V301ZM523.906 294.262C523.906 295.655 523.665 296.879 523.184 297.934C522.702 298.982 522.012 299.789 521.113 300.355C520.221 300.915 519.193 301.195 518.027 301.195C516.875 301.195 515.846 300.915 514.941 300.355C514.043 299.789 513.346 298.985 512.852 297.943C512.363 296.902 512.116 295.701 512.109 294.34V293.539C512.109 292.152 512.354 290.928 512.842 289.867C513.337 288.806 514.03 287.995 514.922 287.436C515.82 286.869 516.849 286.586 518.008 286.586C519.167 286.586 520.192 286.866 521.084 287.426C521.982 287.979 522.676 288.78 523.164 289.828C523.652 290.87 523.9 292.084 523.906 293.471V294.262ZM521.436 293.52C521.436 291.944 521.136 290.736 520.537 289.896C519.945 289.057 519.102 288.637 518.008 288.637C516.94 288.637 516.104 289.057 515.498 289.896C514.899 290.73 514.593 291.911 514.58 293.441V294.262C514.58 295.824 514.883 297.032 515.488 297.885C516.1 298.738 516.947 299.164 518.027 299.164C519.121 299.164 519.961 298.747 520.547 297.914C521.139 297.081 521.436 295.863 521.436 294.262V293.52ZM537.646 301H535.176L528.838 290.912V301H526.367V286.781H528.838L535.195 296.908V286.781H537.646V301ZM548.018 299.027H554.473V301H545.547V286.781H548.018V299.027ZM567.09 294.262C567.09 295.655 566.849 296.879 566.367 297.934C565.885 298.982 565.195 299.789 564.297 300.355C563.405 300.915 562.376 301.195 561.211 301.195C560.059 301.195 559.03 300.915 558.125 300.355C557.227 299.789 556.53 298.985 556.035 297.943C555.547 296.902 555.299 295.701 555.293 294.34V293.539C555.293 292.152 555.537 290.928 556.025 289.867C556.52 288.806 557.214 287.995 558.105 287.436C559.004 286.869 560.033 286.586 561.191 286.586C562.35 286.586 563.376 286.866 564.268 287.426C565.166 287.979 565.859 288.78 566.348 289.828C566.836 290.87 567.083 292.084 567.09 293.471V294.262ZM564.619 293.52C564.619 291.944 564.32 290.736 563.721 289.896C563.128 289.057 562.285 288.637 561.191 288.637C560.124 288.637 559.287 289.057 558.682 289.896C558.083 290.73 557.777 291.911 557.764 293.441V294.262C557.764 295.824 558.066 297.032 558.672 297.885C559.284 298.738 560.13 299.164 561.211 299.164C562.305 299.164 563.145 298.747 563.73 297.914C564.323 297.081 564.619 295.863 564.619 294.262V293.52ZM580.449 299.154C579.935 299.825 579.222 300.333 578.311 300.678C577.399 301.023 576.364 301.195 575.205 301.195C574.014 301.195 572.959 300.925 572.041 300.385C571.123 299.844 570.413 299.073 569.912 298.07C569.417 297.061 569.16 295.886 569.141 294.545V293.432C569.141 291.283 569.655 289.607 570.684 288.402C571.712 287.191 573.148 286.586 574.99 286.586C576.572 286.586 577.829 286.977 578.76 287.758C579.691 288.539 580.251 289.665 580.439 291.137H578.018C577.744 289.424 576.751 288.568 575.039 288.568C573.932 288.568 573.089 288.969 572.51 289.77C571.937 290.564 571.641 291.732 571.621 293.275V294.369C571.621 295.906 571.943 297.1 572.588 297.953C573.239 298.799 574.141 299.223 575.293 299.223C576.556 299.223 577.454 298.936 577.988 298.363V295.58H575.059V293.705H580.449V299.154ZM590.596 297.338C590.596 296.713 590.374 296.231 589.932 295.893C589.495 295.554 588.704 295.212 587.559 294.867C586.413 294.522 585.501 294.138 584.824 293.715C583.529 292.901 582.881 291.84 582.881 290.531C582.881 289.385 583.346 288.441 584.277 287.699C585.215 286.957 586.429 286.586 587.92 286.586C588.91 286.586 589.792 286.768 590.566 287.133C591.341 287.497 591.95 288.018 592.393 288.695C592.835 289.366 593.057 290.111 593.057 290.932H590.596C590.596 290.189 590.361 289.61 589.893 289.193C589.43 288.77 588.766 288.559 587.9 288.559C587.093 288.559 586.465 288.731 586.016 289.076C585.573 289.421 585.352 289.903 585.352 290.521C585.352 291.042 585.592 291.479 586.074 291.83C586.556 292.175 587.35 292.514 588.457 292.846C589.564 293.171 590.452 293.546 591.123 293.969C591.794 294.385 592.285 294.867 592.598 295.414C592.91 295.954 593.066 296.589 593.066 297.318C593.066 298.503 592.611 299.447 591.699 300.15C590.794 300.847 589.564 301.195 588.008 301.195C586.979 301.195 586.032 301.007 585.166 300.629C584.307 300.245 583.636 299.717 583.154 299.047C582.679 298.376 582.441 297.595 582.441 296.703H584.912C584.912 297.51 585.179 298.135 585.713 298.578C586.247 299.021 587.012 299.242 588.008 299.242C588.867 299.242 589.512 299.07 589.941 298.725C590.378 298.373 590.596 297.911 590.596 297.338Z"
          fill="white"
        />
      </g>
      <g id="policy" filter="url(#filterPolicy)">
        <path
          id="Vector_58"
          d="M314 272.127L314.086 272.063L314.161 271.988C314.573 271.58 315.002 271.284 315.506 270.936C315.741 270.773 315.993 270.599 316.267 270.398C316.718 270.127 317.125 269.858 317.504 269.608L317.514 269.601C317.921 269.332 318.295 269.085 318.708 268.84C319.486 268.377 320.273 268.062 321.181 267.702C322.078 267.346 322.937 267.006 323.965 266.667L324.006 266.653L324.047 266.637C324.675 266.388 325.42 266.243 326.237 266.085C326.373 266.058 326.512 266.032 326.652 266.004C327.536 265.829 328.488 265.678 329.226 265.678C329.72 265.678 330.249 265.632 330.72 265.591C330.75 265.588 330.78 265.586 330.81 265.583C331.33 265.538 331.807 265.5 332.271 265.5H578.729C579.804 265.5 580.58 265.503 581.508 265.654C582.027 265.755 582.576 265.804 583.036 265.846L583.073 265.849C583.583 265.895 583.993 265.933 584.348 266.004C584.488 266.032 584.627 266.058 584.763 266.085C585.58 266.243 586.325 266.388 586.953 266.637C587.338 266.79 587.741 266.919 588.095 267.033C588.202 267.068 588.305 267.101 588.401 267.133C588.843 267.279 589.26 267.431 589.706 267.652L589.761 267.679L589.819 267.702C590.727 268.062 591.514 268.377 592.292 268.84C592.545 268.99 592.793 269.125 593.015 269.245L593.102 269.292C593.296 269.396 593.466 269.488 593.633 269.584C594.009 269.799 594.285 269.99 594.51 270.213L594.641 270.343L594.8 270.437C595.608 270.918 596.223 271.378 596.839 271.988C597.233 272.379 597.623 272.717 597.973 273.021L597.987 273.033C598.349 273.347 598.671 273.627 598.988 273.941C599.725 274.671 600.358 275.303 600.818 275.911L600.883 275.996L600.959 276.071C601.37 276.479 601.669 276.904 602.02 277.403C602.196 277.653 602.385 277.923 602.609 278.219C603.091 278.854 603.586 279.67 604.134 280.576C604.6 281.345 604.917 282.123 605.28 283.023C605.639 283.912 605.982 284.762 606.324 285.78L606.339 285.822L606.355 285.863C606.605 286.483 606.75 287.217 606.91 288.027C606.937 288.162 606.964 288.3 606.992 288.439C607.169 289.316 607.321 290.255 607.321 290.982C607.321 291.474 607.367 292 607.408 292.466L607.416 292.556C607.461 293.071 607.5 293.542 607.5 294C607.5 295.074 607.497 295.844 607.342 296.769C607.247 297.329 607.198 297.843 607.156 298.282L607.149 298.361C607.103 298.833 607.064 299.204 606.992 299.561C606.964 299.7 606.937 299.838 606.91 299.973C606.75 300.783 606.605 301.517 606.355 302.137C606.201 302.52 606.069 302.92 605.954 303.271C605.919 303.377 605.886 303.478 605.854 303.574C605.707 304.011 605.554 304.422 605.332 304.863C605.079 305.364 604.895 305.802 604.741 306.167C604.715 306.23 604.689 306.291 604.664 306.35C604.493 306.753 604.347 307.074 604.134 307.424C603.982 307.675 603.846 307.921 603.725 308.142L603.677 308.23C603.572 308.421 603.48 308.589 603.384 308.754C603.167 309.125 602.975 309.398 602.75 309.621C602.285 310.082 601.945 310.587 601.69 310.966L601.665 311.003C601.385 311.419 601.195 311.695 600.959 311.929C600.565 312.319 600.224 312.705 599.918 313.052L599.905 313.066C599.587 313.426 599.306 313.744 598.988 314.059C598.252 314.788 597.614 315.416 597 315.873C596.629 316.149 596.215 316.468 595.815 316.776C595.432 317.071 595.062 317.357 594.731 317.604C594.28 317.874 593.874 318.143 593.496 318.393L593.486 318.399C593.079 318.668 592.705 318.915 592.292 319.16C591.514 319.623 590.727 319.938 589.819 320.298C588.922 320.654 588.063 320.994 587.035 321.333L586.994 321.347L586.953 321.363C586.325 321.612 585.58 321.757 584.763 321.915C584.627 321.942 584.488 321.968 584.348 321.996C583.464 322.171 582.512 322.322 581.774 322.322H581.651L581.53 322.343C580.592 322.497 579.812 322.5 578.729 322.5H332.271C331.188 322.5 330.408 322.497 329.47 322.343C328.906 322.249 328.389 322.201 327.946 322.159L327.867 322.152C327.39 322.107 327.014 322.068 326.652 321.996C326.512 321.968 326.373 321.942 326.237 321.915C325.42 321.757 324.675 321.612 324.047 321.363C323.662 321.21 323.259 321.081 322.905 320.967C322.798 320.932 322.695 320.899 322.599 320.867C322.157 320.721 321.74 320.569 321.294 320.348L321.239 320.321L321.181 320.298C320.273 319.938 319.486 319.623 318.708 319.16C318.455 319.01 318.207 318.875 317.985 318.755C317.955 318.739 317.926 318.723 317.897 318.708C317.704 318.604 317.533 318.512 317.367 318.416C316.991 318.201 316.715 318.01 316.49 317.787L316.359 317.657L316.2 317.563C315.392 317.082 314.777 316.622 314.161 316.012C313.767 315.621 313.377 315.283 313.027 314.979L313.013 314.967C312.651 314.653 312.329 314.373 312.012 314.059C311.275 313.329 310.642 312.697 310.182 312.089L310.117 312.004L310.041 311.929C309.63 311.521 309.331 311.096 308.98 310.597C308.804 310.347 308.614 310.077 308.39 309.781C307.909 309.146 307.414 308.331 306.866 307.424C306.4 306.655 306.083 305.877 305.72 304.977C305.361 304.088 305.018 303.238 304.676 302.22C304.351 301.254 304.187 300.449 304.008 299.561C303.831 298.684 303.679 297.745 303.679 297.018V296.893L303.658 296.769C303.503 295.844 303.5 295.074 303.5 294C303.5 292.926 303.503 292.156 303.658 291.231C303.753 290.671 303.802 290.157 303.844 289.718C303.846 289.692 303.849 289.665 303.851 289.639C303.897 289.167 303.936 288.796 304.008 288.439C304.036 288.3 304.063 288.162 304.09 288.027C304.25 287.217 304.395 286.483 304.645 285.863C304.799 285.48 304.931 285.08 305.046 284.729C305.08 284.623 305.114 284.522 305.146 284.426C305.293 283.989 305.446 283.578 305.668 283.137C305.921 282.636 306.105 282.198 306.259 281.833C306.285 281.77 306.311 281.709 306.336 281.65C306.507 281.247 306.653 280.926 306.866 280.576C307.018 280.325 307.154 280.079 307.275 279.858C307.291 279.829 307.307 279.8 307.322 279.772C307.428 279.58 307.52 279.411 307.616 279.246C307.833 278.875 308.025 278.602 308.25 278.379C308.715 277.918 309.055 277.413 309.31 277.034C309.318 277.021 309.326 277.009 309.335 276.997C309.615 276.581 309.805 276.305 310.041 276.071C310.435 275.681 310.777 275.294 311.083 274.947L311.095 274.934C311.413 274.574 311.694 274.256 312.012 273.941C312.748 273.212 313.386 272.584 314 272.127Z"
          fill="#277F82"
          stroke="white"
          stroke-width="3"
        />
        <path
          id="POLICY AS CODE"
          d="M381.955 295.717V301H379.484V286.781H384.924C386.512 286.781 387.772 287.195 388.703 288.021C389.641 288.848 390.109 289.942 390.109 291.303C390.109 292.696 389.65 293.78 388.732 294.555C387.821 295.329 386.542 295.717 384.895 295.717H381.955ZM381.955 293.734H384.924C385.803 293.734 386.473 293.529 386.936 293.119C387.398 292.702 387.629 292.104 387.629 291.322C387.629 290.554 387.395 289.942 386.926 289.486C386.457 289.024 385.812 288.786 384.992 288.773H381.955V293.734ZM403.625 294.262C403.625 295.655 403.384 296.879 402.902 297.934C402.421 298.982 401.73 299.789 400.832 300.355C399.94 300.915 398.911 301.195 397.746 301.195C396.594 301.195 395.565 300.915 394.66 300.355C393.762 299.789 393.065 298.985 392.57 297.943C392.082 296.902 391.835 295.701 391.828 294.34V293.539C391.828 292.152 392.072 290.928 392.561 289.867C393.055 288.806 393.749 287.995 394.641 287.436C395.539 286.869 396.568 286.586 397.727 286.586C398.885 286.586 399.911 286.866 400.803 287.426C401.701 287.979 402.395 288.78 402.883 289.828C403.371 290.87 403.618 292.084 403.625 293.471V294.262ZM401.154 293.52C401.154 291.944 400.855 290.736 400.256 289.896C399.663 289.057 398.82 288.637 397.727 288.637C396.659 288.637 395.822 289.057 395.217 289.896C394.618 290.73 394.312 291.911 394.299 293.441V294.262C394.299 295.824 394.602 297.032 395.207 297.885C395.819 298.738 396.665 299.164 397.746 299.164C398.84 299.164 399.68 298.747 400.266 297.914C400.858 297.081 401.154 295.863 401.154 294.262V293.52ZM408.557 299.027H415.012V301H406.086V286.781H408.557V299.027ZM419.514 301H417.053V286.781H419.514V301ZM433.4 296.371C433.257 297.888 432.697 299.073 431.721 299.926C430.744 300.772 429.445 301.195 427.824 301.195C426.691 301.195 425.692 300.928 424.826 300.395C423.967 299.854 423.303 299.089 422.834 298.1C422.365 297.11 422.121 295.961 422.102 294.652V293.324C422.102 291.983 422.339 290.801 422.814 289.779C423.29 288.757 423.97 287.969 424.855 287.416C425.747 286.863 426.776 286.586 427.941 286.586C429.51 286.586 430.773 287.012 431.73 287.865C432.688 288.718 433.244 289.923 433.4 291.479H430.939C430.822 290.456 430.523 289.721 430.041 289.271C429.566 288.816 428.866 288.588 427.941 288.588C426.867 288.588 426.04 288.982 425.461 289.77C424.888 290.551 424.595 291.7 424.582 293.217V294.477C424.582 296.013 424.855 297.185 425.402 297.992C425.956 298.799 426.763 299.203 427.824 299.203C428.794 299.203 429.523 298.985 430.012 298.549C430.5 298.113 430.809 297.387 430.939 296.371H433.4ZM440.256 293.52L443.527 286.781H446.262L441.496 295.766V301H439.016V295.766L434.24 286.781H436.984L440.256 293.52ZM460.744 297.689H455.236L454.084 301H451.516L456.887 286.781H459.104L464.484 301H461.906L460.744 297.689ZM455.93 295.697H460.051L457.99 289.799L455.93 295.697ZM473.537 297.338C473.537 296.713 473.316 296.231 472.873 295.893C472.437 295.554 471.646 295.212 470.5 294.867C469.354 294.522 468.443 294.138 467.766 293.715C466.47 292.901 465.822 291.84 465.822 290.531C465.822 289.385 466.288 288.441 467.219 287.699C468.156 286.957 469.37 286.586 470.861 286.586C471.851 286.586 472.733 286.768 473.508 287.133C474.283 287.497 474.891 288.018 475.334 288.695C475.777 289.366 475.998 290.111 475.998 290.932H473.537C473.537 290.189 473.303 289.61 472.834 289.193C472.372 288.77 471.708 288.559 470.842 288.559C470.035 288.559 469.406 288.731 468.957 289.076C468.514 289.421 468.293 289.903 468.293 290.521C468.293 291.042 468.534 291.479 469.016 291.83C469.497 292.175 470.292 292.514 471.398 292.846C472.505 293.171 473.394 293.546 474.064 293.969C474.735 294.385 475.227 294.867 475.539 295.414C475.852 295.954 476.008 296.589 476.008 297.318C476.008 298.503 475.552 299.447 474.641 300.15C473.736 300.847 472.505 301.195 470.949 301.195C469.921 301.195 468.973 301.007 468.107 300.629C467.248 300.245 466.577 299.717 466.096 299.047C465.62 298.376 465.383 297.595 465.383 296.703H467.854C467.854 297.51 468.12 298.135 468.654 298.578C469.188 299.021 469.953 299.242 470.949 299.242C471.809 299.242 472.453 299.07 472.883 298.725C473.319 298.373 473.537 297.911 473.537 297.338ZM494.006 296.371C493.863 297.888 493.303 299.073 492.326 299.926C491.35 300.772 490.051 301.195 488.43 301.195C487.297 301.195 486.298 300.928 485.432 300.395C484.572 299.854 483.908 299.089 483.439 298.1C482.971 297.11 482.727 295.961 482.707 294.652V293.324C482.707 291.983 482.945 290.801 483.42 289.779C483.895 288.757 484.576 287.969 485.461 287.416C486.353 286.863 487.382 286.586 488.547 286.586C490.116 286.586 491.379 287.012 492.336 287.865C493.293 288.718 493.85 289.923 494.006 291.479H491.545C491.428 290.456 491.128 289.721 490.646 289.271C490.171 288.816 489.471 288.588 488.547 288.588C487.473 288.588 486.646 288.982 486.066 289.77C485.493 290.551 485.201 291.7 485.188 293.217V294.477C485.188 296.013 485.461 297.185 486.008 297.992C486.561 298.799 487.368 299.203 488.43 299.203C489.4 299.203 490.129 298.985 490.617 298.549C491.105 298.113 491.415 297.387 491.545 296.371H494.006ZM507.57 294.262C507.57 295.655 507.329 296.879 506.848 297.934C506.366 298.982 505.676 299.789 504.777 300.355C503.885 300.915 502.857 301.195 501.691 301.195C500.539 301.195 499.51 300.915 498.605 300.355C497.707 299.789 497.01 298.985 496.516 297.943C496.027 296.902 495.78 295.701 495.773 294.34V293.539C495.773 292.152 496.018 290.928 496.506 289.867C497.001 288.806 497.694 287.995 498.586 287.436C499.484 286.869 500.513 286.586 501.672 286.586C502.831 286.586 503.856 286.866 504.748 287.426C505.646 287.979 506.34 288.78 506.828 289.828C507.316 290.87 507.564 292.084 507.57 293.471V294.262ZM505.1 293.52C505.1 291.944 504.8 290.736 504.201 289.896C503.609 289.057 502.766 288.637 501.672 288.637C500.604 288.637 499.768 289.057 499.162 289.896C498.563 290.73 498.257 291.911 498.244 293.441V294.262C498.244 295.824 498.547 297.032 499.152 297.885C499.764 298.738 500.611 299.164 501.691 299.164C502.785 299.164 503.625 298.747 504.211 297.914C504.803 297.081 505.1 295.863 505.1 294.262V293.52ZM510.031 301V286.781H514.23C515.487 286.781 516.6 287.061 517.57 287.621C518.547 288.181 519.302 288.975 519.836 290.004C520.37 291.033 520.637 292.211 520.637 293.539V294.252C520.637 295.6 520.367 296.785 519.826 297.807C519.292 298.829 518.527 299.617 517.531 300.17C516.542 300.723 515.406 301 514.123 301H510.031ZM512.502 288.773V299.027H514.113C515.409 299.027 516.402 298.624 517.092 297.816C517.788 297.003 518.143 295.837 518.156 294.32V293.529C518.156 291.986 517.821 290.808 517.15 289.994C516.48 289.18 515.507 288.773 514.23 288.773H512.502ZM531.408 294.652H525.568V299.027H532.395V301H523.098V286.781H532.326V288.773H525.568V292.699H531.408V294.652Z"
          fill="white"
        />
      </g>
      <g id="AsertoLogo">
        <g id="Group" opacity="0.698">
          <g id="Group_2" opacity="0.698">
            <path
              id="Vector_58"
              opacity="0.698"
              d="M111.884 288.141C111.347 289.394 110.81 290.648 110.094 292.438C109.377 294.05 108.661 295.84 107.945 297.81H115.644C114.928 295.84 114.212 294.05 113.495 292.259C112.958 290.648 112.242 289.215 111.884 288.141ZM118.688 306.583C118.33 305.688 117.972 304.792 117.793 303.897C117.435 303.002 117.076 302.107 116.897 301.211H107.05C106.692 302.107 106.334 303.002 106.155 303.897C105.796 304.792 105.438 305.688 105.259 306.583H100.783C101.678 304.076 102.574 301.928 103.29 299.779C104.006 297.631 104.901 295.84 105.617 293.871C106.334 292.08 107.05 290.29 107.945 288.678C108.661 287.067 109.377 285.276 110.273 283.665H114.391C115.107 285.276 116.002 286.888 116.718 288.678C117.435 290.29 118.151 292.08 119.046 293.871C119.762 295.661 120.657 297.631 121.374 299.779C122.09 301.928 122.985 304.076 123.88 306.583H118.688Z"
              fill="white"
            />
            <path
              id="Vector_59"
              opacity="0.698"
              d="M130.683 303.181C131.758 303.181 132.474 303.002 133.011 302.823C133.548 302.644 133.727 302.107 133.727 301.57C133.727 301.033 133.369 300.496 133.011 300.137C132.474 299.779 131.579 299.421 130.504 298.884C129.788 298.705 129.072 298.347 128.535 297.989C127.998 297.631 127.461 297.452 126.923 296.915C126.386 296.556 126.028 296.019 125.849 295.482C125.491 294.766 125.491 294.05 125.491 293.513C125.491 291.901 126.028 290.648 127.282 289.753C128.535 288.857 130.146 288.32 132.116 288.32C133.19 288.32 134.085 288.499 134.981 288.678C135.697 288.857 136.413 289.037 137.129 289.216L136.413 292.438C135.876 292.259 135.339 292.08 134.801 291.901C134.085 291.722 133.19 291.722 132.474 291.722C131.579 291.722 131.042 291.901 130.504 292.08C129.967 292.259 129.788 292.796 129.788 293.334C129.788 293.513 129.788 293.871 129.967 294.05C130.146 294.229 130.325 294.587 130.504 294.587C130.862 294.766 131.042 294.945 131.4 295.124C131.937 295.303 132.295 295.482 132.832 295.661C133.727 296.019 134.443 296.377 135.339 296.735C135.876 297.094 136.413 297.452 136.95 297.81C137.308 298.168 137.666 298.705 137.845 299.242C138.024 299.958 138.203 300.495 138.203 301.212C138.203 302.823 137.666 304.076 136.413 304.972C135.16 305.867 133.369 306.225 131.042 306.225C129.43 306.225 128.356 306.046 127.282 305.867C126.565 305.688 126.028 305.509 125.312 305.33L126.028 301.928C126.744 302.286 127.461 302.465 128.177 302.644C128.714 303.002 129.609 303.181 130.683 303.181Z"
              fill="white"
            />
            <path
              id="Vector_60"
              opacity="0.698"
              d="M152.706 295.302C152.706 294.765 152.706 294.228 152.527 293.691C152.348 293.154 152.169 292.796 151.811 292.438C151.453 292.08 151.095 291.721 150.737 291.542C150.2 291.363 149.663 291.184 149.125 291.184C148.588 291.184 148.051 291.363 147.514 291.542C146.977 291.721 146.619 292.08 146.261 292.438C145.903 292.796 145.724 293.333 145.544 293.691C145.365 294.228 145.186 294.765 145.186 295.302H152.706ZM140.889 297.093C140.889 295.661 141.068 294.228 141.605 292.975C141.964 291.901 142.68 290.826 143.396 289.931C144.112 289.215 145.007 288.499 146.082 288.141C146.977 287.782 148.051 287.603 149.125 287.603C151.632 287.603 153.423 288.32 154.855 289.931C156.287 291.542 157.004 293.691 157.004 296.735C157.004 296.914 157.004 297.272 157.004 297.451C157.004 297.63 157.004 297.988 157.004 298.167H145.186C145.365 299.6 145.724 300.674 146.619 301.569C147.514 302.464 148.767 302.822 150.558 302.822C151.453 302.822 152.348 302.822 153.244 302.464C153.96 302.285 154.497 302.106 155.213 301.927L155.75 305.329C155.392 305.508 155.213 305.508 154.855 305.687C154.318 305.866 153.96 305.866 153.423 306.045C152.885 306.224 152.348 306.224 151.811 306.224C151.274 306.224 150.558 306.403 150.021 306.403C148.409 306.403 147.156 306.224 145.903 305.687C144.828 305.329 143.754 304.613 143.038 303.718C142.322 302.822 141.785 301.927 141.426 300.853C140.889 299.779 140.71 298.525 140.889 297.093Z"
              fill="white"
            />
            <path
              id="Vector_61"
              opacity="0.698"
              d="M170.79 292.796C170.253 292.617 169.895 292.617 169.358 292.438C168.642 292.259 167.926 292.259 167.389 292.259C166.851 292.259 166.493 292.259 165.956 292.438C165.598 292.438 165.24 292.617 164.882 292.617V306.404H160.764V289.931C161.659 289.573 162.733 289.394 163.629 289.036C164.882 288.857 166.135 288.678 167.568 288.678C167.747 288.678 168.105 288.678 168.463 288.678C168.821 288.678 169.179 288.678 169.537 288.857C169.895 288.857 170.253 289.036 170.611 289.036C170.969 289.036 171.149 289.215 171.328 289.215L170.79 292.796Z"
              fill="white"
            />
            <path
              id="Vector_62"
              opacity="0.698"
              d="M174.192 284.381L178.31 283.665V288.857H184.577V292.259H178.31V299.242C178.31 300.674 178.489 301.57 179.027 302.286C179.385 302.823 180.28 303.181 181.354 303.181C182.07 303.181 182.608 303.181 183.324 303.002C183.861 302.823 184.219 302.823 184.756 302.644L185.472 305.867C184.935 306.046 184.219 306.225 183.682 306.404C182.787 306.583 181.891 306.762 180.996 306.762C179.743 306.762 178.669 306.583 177.952 306.225C177.236 305.867 176.52 305.509 175.983 304.792C175.446 304.076 175.088 303.36 174.909 302.465C174.729 301.391 174.55 300.495 174.55 299.421L174.192 284.381Z"
              fill="white"
            />
            <path
              id="Vector_63"
              opacity="0.698"
              d="M199.617 297.093C199.617 295.302 199.259 293.87 198.363 292.796C197.647 291.721 196.573 291.184 195.141 291.184C193.708 291.184 192.634 291.721 191.918 292.796C191.202 293.87 190.664 295.302 190.664 297.093C190.664 298.883 191.023 300.316 191.918 301.39C192.634 302.464 193.708 303.001 195.141 303.001C196.573 303.001 197.647 302.464 198.363 301.39C199.259 300.316 199.617 298.883 199.617 297.093ZM203.914 297.093C203.914 298.346 203.735 299.779 203.377 301.032C203.019 302.106 202.482 303.18 201.586 304.076C200.87 304.971 199.796 305.508 198.901 306.045C197.826 306.582 196.573 306.761 195.32 306.761C194.066 306.761 192.813 306.582 191.739 306.045C190.664 305.687 189.769 304.971 189.053 304.076C188.337 303.18 187.621 302.285 187.263 301.032C186.904 299.779 186.546 298.525 186.546 297.093C186.546 295.84 186.725 294.407 187.263 293.333C187.621 292.259 188.337 291.184 189.053 290.289C189.769 289.394 190.844 288.857 191.739 288.32C192.813 287.782 194.066 287.603 195.32 287.603C196.573 287.603 197.647 287.782 198.901 288.32C199.975 288.678 200.87 289.394 201.586 290.289C202.303 291.184 203.019 292.08 203.377 293.333C203.735 294.407 203.914 295.661 203.914 297.093Z"
              fill="white"
            />
            <path
              id="Vector_64"
              opacity="0.698"
              d="M34.5354 313.745C32.5659 311.059 30.9544 308.015 29.7011 304.792C28.6268 301.39 27.9106 297.988 27.9106 294.407C27.9106 292.259 28.0897 290.11 28.6268 287.962C28.9849 285.813 29.7011 283.844 30.4173 281.874C31.3126 279.905 32.2078 278.114 33.4611 276.324C34.5354 274.533 35.9678 273.101 37.4001 271.49C38.8325 270.057 40.4439 268.625 42.2344 267.55C44.0249 266.297 45.8153 265.402 47.7849 264.507C49.7544 263.611 51.7239 263.074 53.8724 262.716C56.021 262.358 58.1696 262 60.3181 262L34.5354 313.745ZM85.9219 313.745L60.1391 262.179C62.2876 262.179 64.4362 262.358 66.5848 262.895C68.7333 263.253 70.7029 263.97 72.6724 264.686C74.6419 265.581 76.4324 266.476 78.2228 267.73C80.0133 268.804 81.4457 270.236 83.0571 271.669C84.4895 273.101 85.9218 274.712 86.9961 276.503C88.2494 278.293 89.1447 280.084 90.0399 282.053C90.9351 284.023 91.4723 285.992 91.8304 288.141C92.1885 290.289 92.5466 292.438 92.5466 294.587C92.5466 298.167 92.0094 301.569 90.7561 304.971C89.6818 308.015 88.0704 311.059 85.9219 313.745ZM60.1391 326.636C58.1696 326.636 56.2 326.457 54.2305 326.099C52.261 325.741 50.4706 325.204 48.6801 324.487L66.5848 289.394L81.4457 318.579C80.0133 319.832 78.4019 320.906 76.7904 321.981C75.179 323.055 73.3886 323.771 71.5981 324.487C69.8076 325.204 67.8381 325.741 66.0476 326.099C64.2572 326.457 62.2876 326.636 60.1391 326.636Z"
              fill="white"
            />
          </g>
        </g>
        <g id="Group_3" opacity="0.8">
          <g id="Group_4" opacity="0.8">
            <path
              id="Vector_65"
              opacity="0.8"
              d="M110.451 324.309C110.272 325.563 109.914 326.458 109.019 327.174C108.124 327.89 107.228 328.248 105.796 328.248C104.901 328.248 104.006 328.069 103.468 327.532C102.752 327.174 102.215 326.458 101.857 325.742C101.499 325.026 101.32 323.951 101.32 322.877V321.803C101.32 320.728 101.499 319.833 101.857 318.938C102.215 318.043 102.752 317.506 103.468 316.968C104.185 316.61 105.08 316.252 105.975 316.252C107.228 316.252 108.303 316.61 109.019 317.326C109.735 318.043 110.272 318.938 110.451 320.191H108.482C108.303 319.296 108.124 318.759 107.766 318.401C107.407 318.043 106.87 317.864 106.154 317.864C105.259 317.864 104.543 318.222 104.185 318.759C103.647 319.475 103.468 320.37 103.468 321.624V322.698C103.468 323.951 103.647 324.846 104.185 325.563C104.543 326.279 105.259 326.458 106.154 326.458C106.87 326.458 107.586 326.279 107.945 325.921C108.303 325.563 108.661 325.026 108.661 324.13H110.451V324.309ZM121.373 322.519C121.373 323.593 121.194 324.667 120.836 325.563C120.478 326.458 119.941 326.995 119.225 327.532C118.508 328.069 117.613 328.248 116.718 328.248C115.823 328.248 114.927 328.069 114.211 327.532C113.495 326.995 112.958 326.458 112.6 325.563C112.242 324.667 112.063 323.772 112.063 322.698V321.982C112.063 320.907 112.242 319.833 112.6 318.938C112.958 318.043 113.495 317.506 114.211 316.968C114.927 316.431 115.823 316.252 116.718 316.252C117.613 316.252 118.508 316.431 119.225 316.968C119.941 317.506 120.478 318.043 120.836 318.938C121.194 319.833 121.373 320.728 121.373 321.803V322.519ZM119.404 321.982C119.404 320.728 119.225 319.654 118.687 319.117C118.15 318.58 117.613 318.043 116.718 318.043C115.823 318.043 115.106 318.401 114.748 319.117C114.211 319.833 114.032 320.728 114.032 321.982V322.698C114.032 323.951 114.211 324.846 114.748 325.563C115.285 326.279 116.002 326.637 116.718 326.637C117.613 326.637 118.329 326.279 118.687 325.563C119.225 324.846 119.404 323.951 119.404 322.698V321.982ZM132.474 327.89H130.504L125.312 319.833V327.89H123.343V316.431H125.312L130.504 324.667V316.431H132.474V327.89Z"
              fill="white"
            />
            <path
              id="Vector_66"
              opacity="0.8"
              d="M142.859 318.042H139.278V327.89H137.309V318.042H133.728V316.431H142.859V318.042ZM148.588 323.593H146.44V328.069H144.47V316.61H148.409C149.663 316.61 150.737 316.968 151.453 317.505C152.169 318.042 152.528 318.938 152.528 320.012C152.528 320.728 152.348 321.444 151.99 321.981C151.632 322.519 151.095 322.877 150.379 323.235L152.886 328.069V328.248H150.737L148.588 323.593ZM146.261 321.981H148.23C148.947 321.981 149.484 321.802 149.842 321.444C150.2 321.086 150.379 320.728 150.379 320.012C150.379 319.475 150.2 318.938 149.842 318.58C149.484 318.221 148.947 318.042 148.23 318.042H146.082V321.981H146.261ZM163.449 322.519C163.449 323.593 163.27 324.667 162.912 325.562C162.554 326.458 162.017 326.995 161.301 327.532C160.585 328.069 159.689 328.248 158.794 328.248C157.899 328.248 157.004 328.069 156.287 327.532C155.571 326.995 155.034 326.458 154.676 325.562C154.318 324.667 154.139 323.772 154.139 322.698V321.981C154.139 320.907 154.318 319.833 154.676 318.938C155.034 318.042 155.571 317.505 156.287 316.968C157.004 316.431 157.899 316.252 158.794 316.252C159.689 316.252 160.585 316.431 161.301 316.968C162.017 317.505 162.554 318.042 162.912 318.938C163.27 319.833 163.449 320.728 163.449 321.802V322.519ZM161.48 321.981C161.48 320.728 161.301 319.654 160.764 319.117C160.227 318.58 159.689 318.042 158.794 318.042C157.899 318.042 157.183 318.4 156.825 319.117C156.287 319.833 156.108 320.728 156.108 321.981V322.698C156.108 323.951 156.287 324.846 156.825 325.562C157.362 326.279 158.078 326.637 158.794 326.637C159.689 326.637 160.406 326.279 160.764 325.562C161.301 324.846 161.48 323.951 161.48 322.698V321.981ZM167.567 326.458H172.76V328.069H165.598V316.61H167.567V326.458ZM180.28 323.772V328.069H178.31V316.61H182.607C183.861 316.61 184.935 316.968 185.651 317.684C186.367 318.4 186.725 319.296 186.725 320.37C186.725 321.444 186.367 322.34 185.651 323.056C184.935 323.593 183.861 323.951 182.607 323.951H180.28V323.772ZM180.28 322.16H182.607C183.324 322.16 183.861 321.981 184.219 321.623C184.577 321.265 184.756 320.728 184.756 320.191C184.756 319.654 184.577 319.117 184.219 318.759C183.861 318.401 183.324 318.221 182.607 318.221H180.101V322.16H180.28ZM190.485 326.458H195.678V328.069H188.516V316.61H190.485V326.458Z"
              fill="white"
            />
            <path
              id="Vector_67"
              opacity="0.8"
              d="M203.735 325.384H199.438L198.543 328.069H196.394L200.691 316.61H202.482L206.779 328.069H204.809L203.735 325.384ZM199.975 323.772H203.377L201.765 318.938L199.975 323.772ZM217.163 327.89H215.194L210.002 319.833V327.89H208.032V316.431H210.002L215.194 324.667V316.431H217.163V327.89ZM226.295 322.877H221.64V326.458H227.19V328.069H219.67V316.61H227.19V318.222H221.819V321.445H226.474V322.877H226.295Z"
              fill="white"
            />
          </g>
        </g>
      </g>
      <path
        data-arrow
        id="arrow1"
        d="M279 23C277.895 23 277 23.8954 277 25C277 26.1046 277.895 27 279 27V23ZM328.414 26.4142C329.195 25.6332 329.195 24.3668 328.414 23.5858L315.686 10.8579C314.905 10.0768 313.639 10.0768 312.858 10.8579C312.077 11.6389 312.077 12.9052 312.858 13.6863L324.172 25L312.858 36.3137C312.077 37.0948 312.077 38.3611 312.858 39.1421C313.639 39.9232 314.905 39.9232 315.686 39.1421L328.414 26.4142ZM279 27H327V23H279V27Z"
        fill="#3364AE"
      />
      <path
        data-arrow
        id="arrow2"
        d="M327 55C328.105 55 329 55.8954 329 57C329 58.1046 328.105 59 327 59V55ZM277.586 58.4142C276.805 57.6332 276.805 56.3668 277.586 55.5858L290.314 42.8579C291.095 42.0768 292.361 42.0768 293.142 42.8579C293.923 43.6389 293.923 44.9052 293.142 45.6863L281.828 57L293.142 68.3137C293.923 69.0948 293.923 70.3611 293.142 71.1421C292.361 71.9232 291.095 71.9232 290.314 71.1421L277.586 58.4142ZM327 59H279V55H327V59Z"
        fill="#376EBF"
      />
      <path
        data-arrow
        id="arrow3"
        d="M582 23C580.895 23 580 23.8954 580 25C580 26.1046 580.895 27 582 27V23ZM631.414 26.4142C632.195 25.6332 632.195 24.3668 631.414 23.5858L618.686 10.8579C617.905 10.0768 616.639 10.0768 615.858 10.8579C615.077 11.6389 615.077 12.9052 615.858 13.6863L627.172 25L615.858 36.3137C615.077 37.0948 615.077 38.3611 615.858 39.1421C616.639 39.9232 617.905 39.9232 618.686 39.1421L631.414 26.4142ZM582 27H630V23H582V27Z"
        fill="#3364AE"
      />
      <path
        data-arrow
        id="arrow4"
        d="M630 55C631.105 55 632 55.8954 632 57C632 58.1046 631.105 59 630 59V55ZM580.586 58.4142C579.805 57.6332 579.805 56.3668 580.586 55.5858L593.314 42.8579C594.095 42.0768 595.361 42.0768 596.142 42.8579C596.923 43.6389 596.923 44.9052 596.142 45.6863L584.828 57L596.142 68.3137C596.923 69.0948 596.923 70.3611 596.142 71.1421C595.361 71.9232 594.095 71.9232 593.314 71.1421L580.586 58.4142ZM630 59H582V55H630V59Z"
        fill="#3364AE"
      />
      <g id="authorization">
        <g id="Rectangle 149478761" filter="url(#filter22_d)">
          <rect
            x="485"
            y="156"
            width="241"
            height="55"
            rx="27.5"
            fill="url(#paint0_linear)"
          />
          <rect
            x="486"
            y="157"
            width="239"
            height="53"
            rx="26.5"
            stroke="white"
            stroke-width="2"
          />
        </g>
        <g id="LOCAL AUTHORIZATION">
          <path
            d="M514.48 188.323H519.967V190H512.38V177.914H514.48V188.323Z"
            fill="white"
          />
          <path
            d="M530.691 184.272C530.691 185.457 530.487 186.497 530.077 187.394C529.668 188.285 529.081 188.971 528.317 189.452C527.559 189.928 526.685 190.166 525.694 190.166C524.715 190.166 523.84 189.928 523.071 189.452C522.308 188.971 521.715 188.287 521.295 187.402C520.88 186.516 520.67 185.495 520.664 184.339V183.658C520.664 182.479 520.872 181.439 521.287 180.537C521.707 179.635 522.297 178.946 523.055 178.47C523.818 177.989 524.693 177.748 525.678 177.748C526.663 177.748 527.534 177.986 528.292 178.462C529.056 178.932 529.646 179.613 530.061 180.504C530.476 181.389 530.686 182.421 530.691 183.6V184.272ZM528.591 183.642C528.591 182.302 528.337 181.276 527.828 180.562C527.324 179.848 526.607 179.491 525.678 179.491C524.77 179.491 524.059 179.848 523.544 180.562C523.035 181.27 522.775 182.275 522.764 183.575V184.272C522.764 185.601 523.021 186.627 523.536 187.352C524.056 188.077 524.776 188.439 525.694 188.439C526.624 188.439 527.338 188.085 527.836 187.377C528.34 186.669 528.591 185.634 528.591 184.272V183.642Z"
            fill="white"
          />
          <path
            d="M542.005 186.065C541.884 187.355 541.408 188.362 540.578 189.087C539.748 189.806 538.644 190.166 537.266 190.166C536.303 190.166 535.453 189.939 534.717 189.485C533.987 189.026 533.422 188.376 533.024 187.535C532.625 186.694 532.418 185.717 532.401 184.604V183.476C532.401 182.336 532.603 181.331 533.007 180.462C533.411 179.594 533.99 178.924 534.742 178.454C535.5 177.983 536.375 177.748 537.365 177.748C538.699 177.748 539.772 178.111 540.586 178.835C541.399 179.56 541.873 180.584 542.005 181.907H539.914C539.814 181.038 539.559 180.413 539.15 180.031C538.746 179.643 538.151 179.45 537.365 179.45C536.452 179.45 535.749 179.785 535.257 180.454C534.77 181.118 534.521 182.095 534.51 183.384V184.455C534.51 185.761 534.742 186.757 535.207 187.443C535.677 188.13 536.364 188.473 537.266 188.473C538.09 188.473 538.71 188.287 539.125 187.917C539.54 187.546 539.803 186.929 539.914 186.065H542.005Z"
            fill="white"
          />
          <path
            d="M550.655 187.186H545.973L544.994 190H542.811L547.376 177.914H549.26L553.834 190H551.643L550.655 187.186ZM546.562 185.493H550.065L548.314 180.479L546.562 185.493Z"
            fill="white"
          />
          <path
            d="M557.312 188.323H562.799V190H555.212V177.914H557.312V188.323Z"
            fill="white"
          />
          <path
            d="M575.408 187.186H570.726L569.747 190H567.563L572.129 177.914H574.013L578.587 190H576.396L575.408 187.186ZM571.315 185.493H574.818L573.067 180.479L571.315 185.493Z"
            fill="white"
          />
          <path
            d="M588.656 177.914V185.991C588.656 187.275 588.243 188.293 587.419 189.045C586.6 189.792 585.507 190.166 584.14 190.166C582.757 190.166 581.658 189.798 580.845 189.062C580.031 188.32 579.625 187.294 579.625 185.982V177.914H581.716V185.999C581.716 186.807 581.921 187.424 582.331 187.85C582.74 188.276 583.343 188.489 584.14 188.489C585.756 188.489 586.564 187.637 586.564 185.933V177.914H588.656Z"
            fill="white"
          />
          <path
            d="M599.638 179.607H595.869V190H593.786V179.607H590.05V177.914H599.638V179.607Z"
            fill="white"
          />
          <path
            d="M610.827 190H608.735V184.629H603.332V190H601.231V177.914H603.332V182.944H608.735V177.914H610.827V190Z"
            fill="white"
          />
          <path
            d="M622.963 184.272C622.963 185.457 622.758 186.497 622.349 187.394C621.939 188.285 621.353 188.971 620.589 189.452C619.831 189.928 618.956 190.166 617.966 190.166C616.986 190.166 616.112 189.928 615.343 189.452C614.579 188.971 613.987 188.287 613.566 187.402C613.151 186.516 612.941 185.495 612.936 184.339V183.658C612.936 182.479 613.143 181.439 613.558 180.537C613.979 179.635 614.568 178.946 615.326 178.47C616.09 177.989 616.964 177.748 617.949 177.748C618.934 177.748 619.806 177.986 620.564 178.462C621.328 178.932 621.917 179.613 622.332 180.504C622.747 181.389 622.957 182.421 622.963 183.6V184.272ZM620.863 183.642C620.863 182.302 620.608 181.276 620.099 180.562C619.596 179.848 618.879 179.491 617.949 179.491C617.042 179.491 616.331 179.848 615.816 180.562C615.307 181.27 615.047 182.275 615.036 183.575V184.272C615.036 185.601 615.293 186.627 615.808 187.352C616.328 188.077 617.047 188.439 617.966 188.439C618.896 188.439 619.609 188.085 620.107 187.377C620.611 186.669 620.863 185.634 620.863 184.272V183.642Z"
            fill="white"
          />
          <path
            d="M629.496 185.343H627.155V190H625.055V177.914H629.305C630.699 177.914 631.776 178.227 632.534 178.852C633.292 179.477 633.671 180.382 633.671 181.566C633.671 182.374 633.474 183.052 633.082 183.6C632.694 184.142 632.152 184.56 631.455 184.854L634.169 189.892V190H631.919L629.496 185.343ZM627.155 183.658H629.313C630.021 183.658 630.575 183.481 630.973 183.127C631.372 182.767 631.571 182.278 631.571 181.658C631.571 181.01 631.385 180.509 631.015 180.155C630.649 179.801 630.102 179.618 629.371 179.607H627.155V183.658Z"
            fill="white"
          />
          <path d="M637.879 190H635.788V177.914H637.879V190Z" fill="white" />
          <path
            d="M642.437 188.323H648.895V190H639.896V188.639L646.147 179.607H639.938V177.914H648.695V179.242L642.437 188.323Z"
            fill="white"
          />
          <path
            d="M657.585 187.186H652.904L651.924 190H649.741L654.307 177.914H656.191L660.765 190H658.573L657.585 187.186ZM653.493 185.493H656.996L655.245 180.479L653.493 185.493Z"
            fill="white"
          />
          <path
            d="M669.879 179.607H666.11V190H664.027V179.607H660.292V177.914H669.879V179.607Z"
            fill="white"
          />
          <path d="M673.689 190H671.597V177.914H673.689V190Z" fill="white" />
          <path
            d="M685.916 184.272C685.916 185.457 685.711 186.497 685.302 187.394C684.892 188.285 684.306 188.971 683.542 189.452C682.784 189.928 681.91 190.166 680.919 190.166C679.939 190.166 679.065 189.928 678.296 189.452C677.532 188.971 676.94 188.287 676.52 187.402C676.104 186.516 675.894 185.495 675.889 184.339V183.658C675.889 182.479 676.096 181.439 676.511 180.537C676.932 179.635 677.521 178.946 678.279 178.47C679.043 177.989 679.917 177.748 680.902 177.748C681.887 177.748 682.759 177.986 683.517 178.462C684.281 178.932 684.87 179.613 685.285 180.504C685.7 181.389 685.91 182.421 685.916 183.6V184.272ZM683.816 183.642C683.816 182.302 683.561 181.276 683.052 180.562C682.549 179.848 681.832 179.491 680.902 179.491C679.995 179.491 679.284 179.848 678.769 180.562C678.26 181.27 678 182.275 677.989 183.575V184.272C677.989 185.601 678.246 186.627 678.761 187.352C679.281 188.077 680 188.439 680.919 188.439C681.849 188.439 682.562 188.085 683.061 187.377C683.564 186.669 683.816 185.634 683.816 184.272V183.642Z"
            fill="white"
          />
          <path
            d="M697.595 190H695.495L690.108 181.425V190H688.008V177.914H690.108L695.512 186.522V177.914H697.595V190Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filterPolicy"
          data-filter
          x="282"
          y="244"
          width="347"
          height="100"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          data-filter
          id="filter0_d"
          x="735.625"
          y="172.625"
          width="29.75"
          height="28.75"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.2 0 0 0 0 0.392157 0 0 0 0 0.682353 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          data-filter
          id="filter1_d"
          x="437.625"
          y="172.625"
          width="28.75"
          height="28.75"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.2 0 0 0 0 0.392157 0 0 0 0 0.682353 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          data-filter
          id="filter2_d"
          x="326.625"
          y="389.625"
          width="28.75"
          height="28.75"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.2 0 0 0 0 0.392157 0 0 0 0 0.682353 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          data-filter
          id="filter3_d"
          x="99.625"
          y="389.625"
          width="28.75"
          height="28.75"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.2 0 0 0 0 0.392157 0 0 0 0 0.682353 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          data-filter
          id="filter4_d"
          x="553.625"
          y="389.625"
          width="28.75"
          height="28.75"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.2 0 0 0 0 0.392157 0 0 0 0 0.682353 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          data-filter
          id="filter5_d"
          x="781.625"
          y="389.625"
          width="28.75"
          height="28.75"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.2 0 0 0 0 0.392157 0 0 0 0 0.682353 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          colorInterpolationFilters="sRGB"
          data-filter
          filterUnits="userSpaceOnUse"
          height="78.5"
          id="sidecarFilter2"
          width="229.5"
          x="637.25"
          y="74.25"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0.152941 0 0 0 0 0.498039 0 0 0 0 0.509804 0 0 0 1 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0.13 0 0 0 0 0 0.370 0 0 0 0 0.380 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          colorInterpolationFilters="sRGB"
          data-filter
          filterUnits="userSpaceOnUse"
          height="78.5"
          id="sidecarFilter1"
          width="228.5"
          x="341.25"
          y="74.25"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0.152941 0 0 0 0 0.498039 0 0 0 0 0.509804 0 0 0 1 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0.13 0 0 0 0 0 0.370 0 0 0 0 0.380 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          data-filter
          id="filter8_d"
          x="0"
          y="0"
          width="316"
          height="166"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="25" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.2 0 0 0 0 0.392157 0 0 0 0 0.682353 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.254902 0 0 0 0 0.529412 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          data-filter
          id="filter9_d"
          x="298"
          y="0"
          width="316"
          height="166"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="25" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.2 0 0 0 0 0.392157 0 0 0 0 0.682353 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.254902 0 0 0 0 0.529412 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          data-filter
          id="filter10_d"
          x="596"
          y="0"
          width="316"
          height="166"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="25" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.2 0 0 0 0 0.392157 0 0 0 0 0.682353 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.254902 0 0 0 0 0.529412 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          data-filter
          id="filter11_d"
          x="260.25"
          y="438.25"
          width="161.5"
          height="161.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0.2 0 0 0 0 0.392157 0 0 0 0 0.682353 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          data-filter
          id="filter12_d"
          x="32.25"
          y="438.25"
          width="160.5"
          height="161.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.2 0 0 0 0 0.392157 0 0 0 0 0.682353 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          data-filter
          id="filter13_d"
          x="488.25"
          y="438.25"
          width="161.5"
          height="161.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.2 0 0 0 0 0.392157 0 0 0 0 0.682353 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          data-filter
          id="filter14_d"
          x="717.25"
          y="437.25"
          width="160.5"
          height="161.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.2 0 0 0 0 0.392157 0 0 0 0 0.682353 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter22_d"
          x="469"
          y="140"
          width="273"
          height="87"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            radius="2"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="485"
          y1="181"
          x2="726"
          y2="181"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1A2950" />
          <stop offset="1" stop-color="#131617" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Animation
