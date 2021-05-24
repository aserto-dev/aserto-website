import { useEffect } from 'react'
import gsap from 'gsap'
import { DURATION } from 'lib/gsap'

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

    timeline.set([bubbles, arrows, '#decision', '#user', '#policy'], {
      autoAlpha: 0
    })
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
        yPercent: -380
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
      startAt: {
        yPercent: 20
      },
      ease: 'back.out(1)',
      yPercent: 0,
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
          stdDeviation: 5
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
    timeline.to(
      '#policy',
      {
        yPercent: 20,
        autoAlpha: 0
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
        yPercent: -380
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
        yPercent: -380
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
        yPercent: -380
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
      startAt: {
        yPercent: 20
      },
      ease: 'back.out(1)',
      yPercent: 0,
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
        yPercent: -380
      },
      '<'
    )
    timeline.addLabel('end-sequence-13')
    timeline.addLabel('start-sequence-14')
    timeline.to(
      ['#sidecarFilter1 feGaussianBlur', '#sidecarFilter2 feGaussianBlur'],
      {
        attr: {
          stdDeviation: 5
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
    timeline.to(
      '#user',
      {
        yPercent: 20,
        autoAlpha: 0
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
          stdDeviation: 13
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
    timeline.to(
      '#arrow1',
      {
        startAt: {
          xPercent: -20
        },
        ease: 'back.out(1)',
        xPercent: 0,
        autoAlpha: 1
      },
      '<'
    )
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
          stdDeviation: 13
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
    timeline.to(
      '#reactBg',
      {
        delay: DURATION,
        fill: '#121212'
      },
      '<'
    )
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
        autoAlpha: 1
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
          stdDeviation: 13
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
      autoAlpha: 1
    })
    timeline.to('#arrow2', {
      startAt: {
        xPercent: 20
      },
      ease: 'back.out(1)',
      xPercent: 0,
      autoAlpha: 1
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
          stdDeviation: 13
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
          stdDeviation: 5
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
        yPercent: 380
      },
      '<'
    )
    timeline.to(
      ['#sidecarFilter1 feGaussianBlur', '#sidecarFilter2 feGaussianBlur'],
      {
        attr: {
          stdDeviation: 5
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
    timeline.to(
      '#decision',
      {
        startAt: {
          yPercent: 20
        },
        yPercent: 0,
        autoAlpha: 1
      },
      '<'
    )
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
        yPercent: -20,
        autoAlpha: 0
      },
      '<'
    )
    timeline.to(
      ['#arrow1', '#arrow2', '#arrow3', '#arrow4'],
      {
        autoAlpha: 0
      },
      '<'
    )
    timeline.addLabel('end-sequence-20')

    timeline.timeScale(1).play()
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
          id="Vector_55"
          d="M377 273.127L377.086 273.063L377.161 272.988C377.573 272.58 378.002 272.284 378.506 271.936C378.741 271.773 378.993 271.599 379.267 271.398C379.718 271.127 380.125 270.858 380.504 270.608L380.514 270.601C380.921 270.332 381.295 270.085 381.708 269.84C382.486 269.377 383.273 269.062 384.181 268.702C385.078 268.346 385.937 268.006 386.965 267.667L387.006 267.653L387.047 267.637C387.675 267.388 388.42 267.243 389.237 267.085C389.373 267.058 389.512 267.032 389.652 267.004C390.536 266.829 391.488 266.678 392.226 266.678C392.72 266.678 393.249 266.632 393.72 266.591C393.75 266.588 393.78 266.586 393.81 266.583C394.33 266.538 394.807 266.5 395.271 266.5H545.729C546.804 266.5 547.58 266.503 548.508 266.654C549.027 266.755 549.576 266.804 550.036 266.846L550.073 266.849C550.583 266.895 550.993 266.933 551.348 267.004C551.488 267.032 551.627 267.058 551.763 267.085C552.58 267.243 553.325 267.388 553.953 267.637C554.339 267.79 554.741 267.919 555.095 268.033C555.202 268.068 555.305 268.101 555.401 268.133C555.843 268.279 556.26 268.431 556.706 268.652L556.761 268.679L556.819 268.702C557.727 269.062 558.514 269.377 559.292 269.84C559.545 269.99 559.793 270.125 560.015 270.245L560.103 270.292C560.296 270.396 560.467 270.488 560.633 270.584C561.009 270.799 561.285 270.99 561.51 271.213L561.641 271.343L561.8 271.437C562.608 271.918 563.223 272.378 563.839 272.988L564.895 271.923L563.839 272.988C564.233 273.379 564.623 273.717 564.973 274.02L564.987 274.033C565.35 274.347 565.671 274.627 565.988 274.941C566.725 275.671 567.358 276.303 567.818 276.911L567.883 276.996L567.958 277.071C568.37 277.479 568.669 277.904 569.02 278.403C569.196 278.653 569.386 278.923 569.609 279.219C570.091 279.854 570.586 280.67 571.135 281.576C571.6 282.345 571.917 283.123 572.28 284.023C572.639 284.912 572.982 285.762 573.324 286.78L573.339 286.822L573.355 286.863C573.605 287.483 573.75 288.217 573.91 289.027C573.937 289.162 573.964 289.3 573.992 289.439C574.169 290.316 574.321 291.255 574.321 291.982C574.321 292.474 574.367 293 574.408 293.466L574.416 293.556C574.461 294.071 574.5 294.542 574.5 295C574.5 296.074 574.497 296.844 574.342 297.769C574.247 298.329 574.198 298.843 574.156 299.282L574.149 299.361C574.103 299.833 574.064 300.204 573.992 300.561C573.964 300.7 573.937 300.838 573.91 300.973C573.75 301.783 573.605 302.517 573.355 303.137C573.201 303.52 573.069 303.92 572.954 304.271C572.92 304.377 572.886 304.478 572.854 304.574C572.707 305.011 572.554 305.422 572.332 305.863C572.079 306.364 571.895 306.802 571.741 307.167C571.715 307.23 571.689 307.291 571.664 307.35C571.493 307.753 571.347 308.074 571.134 308.424C570.982 308.675 570.846 308.921 570.725 309.142L570.678 309.229C570.572 309.42 570.48 309.589 570.384 309.754C570.167 310.125 569.975 310.398 569.75 310.621L570.806 311.686L569.75 310.621C569.285 311.082 568.945 311.587 568.69 311.966L568.665 312.003C568.385 312.419 568.195 312.695 567.958 312.929C567.565 313.319 567.223 313.706 566.917 314.053L566.905 314.066C566.587 314.426 566.306 314.744 565.988 315.059C565.252 315.788 564.614 316.416 564 316.873C563.629 317.149 563.215 317.468 562.815 317.776C562.432 318.071 562.062 318.357 561.731 318.604C561.28 318.874 560.874 319.143 560.496 319.392L560.486 319.399C560.079 319.668 559.705 319.915 559.292 320.16C558.514 320.623 557.727 320.938 556.819 321.298C555.922 321.654 555.063 321.994 554.035 322.333L553.994 322.347L553.953 322.363C553.325 322.612 552.58 322.757 551.763 322.915C551.627 322.942 551.488 322.968 551.348 322.996C550.464 323.171 549.512 323.322 548.774 323.322H548.651L548.53 323.343C547.592 323.497 546.812 323.5 545.729 323.5H395.271C394.188 323.5 393.408 323.497 392.47 323.343C391.906 323.249 391.389 323.201 390.946 323.159L390.867 323.152C390.39 323.107 390.014 323.068 389.652 322.996C389.512 322.968 389.373 322.942 389.237 322.915C388.42 322.757 387.675 322.612 387.047 322.363C386.662 322.21 386.259 322.081 385.905 321.967C385.798 321.932 385.695 321.899 385.599 321.867C385.157 321.721 384.74 321.569 384.294 321.348L384.239 321.321L384.181 321.298C383.273 320.938 382.486 320.623 381.708 320.16L380.997 321.356L381.708 320.16C381.455 320.01 381.207 319.875 380.985 319.755C380.955 319.739 380.926 319.723 380.897 319.708C380.704 319.604 380.533 319.512 380.367 319.416C379.991 319.201 379.715 319.01 379.49 318.787L379.359 318.657L379.2 318.563C378.392 318.082 377.777 317.622 377.161 317.012C376.767 316.621 376.377 316.283 376.027 315.979L376.013 315.967C375.651 315.653 375.329 315.373 375.012 315.059C374.275 314.329 373.642 313.697 373.182 313.089L373.117 313.004L373.041 312.929C372.63 312.521 372.331 312.096 371.98 311.597C371.804 311.347 371.614 311.077 371.39 310.781L370.213 311.672L371.39 310.781C370.909 310.146 370.414 309.331 369.866 308.424C369.4 307.655 369.083 306.877 368.72 305.977C368.361 305.088 368.018 304.238 367.676 303.22C367.351 302.254 367.187 301.449 367.008 300.561C366.831 299.684 366.679 298.745 366.679 298.018V297.893L366.658 297.769C366.503 296.844 366.5 296.074 366.5 295C366.5 293.926 366.503 293.156 366.658 292.231C366.753 291.671 366.802 291.157 366.844 290.718C366.846 290.692 366.849 290.665 366.851 290.639C366.897 290.167 366.936 289.796 367.008 289.439C367.036 289.3 367.063 289.162 367.09 289.027C367.25 288.217 367.395 287.483 367.645 286.863C367.799 286.48 367.931 286.08 368.046 285.729C368.08 285.623 368.114 285.522 368.146 285.426C368.293 284.989 368.446 284.578 368.668 284.137C368.921 283.636 369.105 283.198 369.259 282.833C369.285 282.77 369.311 282.709 369.336 282.65C369.507 282.247 369.653 281.926 369.866 281.576C370.018 281.325 370.154 281.079 370.275 280.858C370.291 280.829 370.307 280.8 370.322 280.772C370.428 280.58 370.52 280.411 370.616 280.246C370.833 279.875 371.025 279.602 371.25 279.379C371.715 278.918 372.055 278.413 372.31 278.034C372.318 278.021 372.326 278.009 372.335 277.997C372.615 277.581 372.805 277.305 373.041 277.071C373.435 276.681 373.777 276.294 374.083 275.947L374.095 275.934C374.413 275.574 374.694 275.256 375.012 274.941L373.956 273.876L375.012 274.941C375.748 274.212 376.386 273.584 377 273.127Z"
          fill="#277F82"
          stroke="white"
          strokeWidth="3"
        />
        <path
          id="USER ATTRIBUTES"
          d="M397.943 287.781V297.283C397.943 298.794 397.458 299.992 396.488 300.877C395.525 301.756 394.239 302.195 392.631 302.195C391.003 302.195 389.711 301.762 388.754 300.896C387.797 300.024 387.318 298.816 387.318 297.273V287.781H389.779V297.293C389.779 298.243 390.02 298.969 390.502 299.471C390.984 299.972 391.693 300.223 392.631 300.223C394.532 300.223 395.482 299.22 395.482 297.215V287.781H397.943ZM408.021 298.338C408.021 297.713 407.8 297.231 407.357 296.893C406.921 296.554 406.13 296.212 404.984 295.867C403.839 295.522 402.927 295.138 402.25 294.715C400.954 293.901 400.307 292.84 400.307 291.531C400.307 290.385 400.772 289.441 401.703 288.699C402.641 287.957 403.855 287.586 405.346 287.586C406.335 287.586 407.217 287.768 407.992 288.133C408.767 288.497 409.376 289.018 409.818 289.695C410.261 290.366 410.482 291.111 410.482 291.932H408.021C408.021 291.189 407.787 290.61 407.318 290.193C406.856 289.77 406.192 289.559 405.326 289.559C404.519 289.559 403.891 289.731 403.441 290.076C402.999 290.421 402.777 290.903 402.777 291.521C402.777 292.042 403.018 292.479 403.5 292.83C403.982 293.175 404.776 293.514 405.883 293.846C406.99 294.171 407.878 294.546 408.549 294.969C409.219 295.385 409.711 295.867 410.023 296.414C410.336 296.954 410.492 297.589 410.492 298.318C410.492 299.503 410.036 300.447 409.125 301.15C408.22 301.847 406.99 302.195 405.434 302.195C404.405 302.195 403.458 302.007 402.592 301.629C401.732 301.245 401.062 300.717 400.58 300.047C400.105 299.376 399.867 298.595 399.867 297.703H402.338C402.338 298.51 402.605 299.135 403.139 299.578C403.673 300.021 404.438 300.242 405.434 300.242C406.293 300.242 406.938 300.07 407.367 299.725C407.803 299.373 408.021 298.911 408.021 298.338ZM420.971 295.652H415.131V300.027H421.957V302H412.66V287.781H421.889V289.773H415.131V293.699H420.971V295.652ZM429.193 296.521H426.439V302H423.969V287.781H428.969C430.609 287.781 431.876 288.149 432.768 288.885C433.66 289.62 434.105 290.685 434.105 292.078C434.105 293.029 433.874 293.826 433.412 294.471C432.956 295.109 432.318 295.6 431.498 295.945L434.691 301.873V302H432.045L429.193 296.521ZM426.439 294.539H428.979C429.812 294.539 430.463 294.331 430.932 293.914C431.4 293.491 431.635 292.915 431.635 292.186C431.635 291.424 431.417 290.835 430.98 290.418C430.551 290.001 429.906 289.786 429.047 289.773H426.439V294.539ZM449.389 298.689H443.881L442.729 302H440.16L445.531 287.781H447.748L453.129 302H450.551L449.389 298.689ZM444.574 296.697H448.695L446.635 290.799L444.574 296.697ZM463.852 289.773H459.418V302H456.967V289.773H452.572V287.781H463.852V289.773ZM476.156 289.773H471.723V302H469.271V289.773H464.877V287.781H476.156V289.773ZM483.256 296.521H480.502V302H478.031V287.781H483.031C484.672 287.781 485.938 288.149 486.83 288.885C487.722 289.62 488.168 290.685 488.168 292.078C488.168 293.029 487.937 293.826 487.475 294.471C487.019 295.109 486.381 295.6 485.561 295.945L488.754 301.873V302H486.107L483.256 296.521ZM480.502 294.539H483.041C483.874 294.539 484.525 294.331 484.994 293.914C485.463 293.491 485.697 292.915 485.697 292.186C485.697 291.424 485.479 290.835 485.043 290.418C484.613 290.001 483.969 289.786 483.109 289.773H480.502V294.539ZM493.119 302H490.658V287.781H493.119V302ZM496.156 302V287.781H501.029C502.637 287.781 503.861 288.104 504.701 288.748C505.541 289.393 505.961 290.353 505.961 291.629C505.961 292.28 505.785 292.866 505.434 293.387C505.082 293.908 504.568 294.311 503.891 294.598C504.659 294.806 505.251 295.2 505.668 295.779C506.091 296.352 506.303 297.042 506.303 297.85C506.303 299.184 505.873 300.21 505.014 300.926C504.161 301.642 502.937 302 501.342 302H496.156ZM498.627 295.584V300.027H501.371C502.146 300.027 502.751 299.835 503.188 299.451C503.624 299.067 503.842 298.533 503.842 297.85C503.842 296.372 503.087 295.617 501.576 295.584H498.627ZM498.627 293.768H501.049C501.817 293.768 502.416 293.595 502.846 293.25C503.282 292.898 503.5 292.404 503.5 291.766C503.5 291.062 503.298 290.555 502.895 290.242C502.497 289.93 501.876 289.773 501.029 289.773H498.627V293.768ZM519.174 287.781V297.283C519.174 298.794 518.689 299.992 517.719 300.877C516.755 301.756 515.469 302.195 513.861 302.195C512.234 302.195 510.941 301.762 509.984 300.896C509.027 300.024 508.549 298.816 508.549 297.273V287.781H511.01V297.293C511.01 298.243 511.251 298.969 511.732 299.471C512.214 299.972 512.924 300.223 513.861 300.223C515.762 300.223 516.713 299.22 516.713 297.215V287.781H519.174ZM532.094 289.773H527.66V302H525.209V289.773H520.814V287.781H532.094V289.773ZM542.279 295.652H536.439V300.027H543.266V302H533.969V287.781H543.197V289.773H536.439V293.699H542.279V295.652ZM552.709 298.338C552.709 297.713 552.488 297.231 552.045 296.893C551.609 296.554 550.818 296.212 549.672 295.867C548.526 295.522 547.615 295.138 546.938 294.715C545.642 293.901 544.994 292.84 544.994 291.531C544.994 290.385 545.46 289.441 546.391 288.699C547.328 287.957 548.542 287.586 550.033 287.586C551.023 287.586 551.905 287.768 552.68 288.133C553.454 288.497 554.063 289.018 554.506 289.695C554.949 290.366 555.17 291.111 555.17 291.932H552.709C552.709 291.189 552.475 290.61 552.006 290.193C551.544 289.77 550.88 289.559 550.014 289.559C549.206 289.559 548.578 289.731 548.129 290.076C547.686 290.421 547.465 290.903 547.465 291.521C547.465 292.042 547.706 292.479 548.188 292.83C548.669 293.175 549.464 293.514 550.57 293.846C551.677 294.171 552.566 294.546 553.236 294.969C553.907 295.385 554.398 295.867 554.711 296.414C555.023 296.954 555.18 297.589 555.18 298.318C555.18 299.503 554.724 300.447 553.812 301.15C552.908 301.847 551.677 302.195 550.121 302.195C549.092 302.195 548.145 302.007 547.279 301.629C546.42 301.245 545.749 300.717 545.268 300.047C544.792 299.376 544.555 298.595 544.555 297.703H547.025C547.025 298.51 547.292 299.135 547.826 299.578C548.36 300.021 549.125 300.242 550.121 300.242C550.98 300.242 551.625 300.07 552.055 299.725C552.491 299.373 552.709 298.911 552.709 298.338Z"
          fill="white"
        />
      </g>
      <g id="decision" filter="url(#filterPolicy)">
        <path
          id="Vector_56"
          d="M377 273.127L377.086 273.063L377.161 272.988C377.573 272.58 378.002 272.284 378.506 271.936C378.741 271.773 378.993 271.599 379.267 271.398C379.718 271.127 380.125 270.858 380.504 270.608L380.514 270.601C380.921 270.332 381.295 270.085 381.708 269.84C382.486 269.377 383.273 269.062 384.181 268.702C385.078 268.346 385.937 268.006 386.965 267.667L387.006 267.653L387.047 267.637C387.675 267.388 388.42 267.243 389.237 267.085C389.373 267.058 389.512 267.032 389.652 267.004C390.536 266.829 391.488 266.678 392.226 266.678C392.72 266.678 393.249 266.632 393.72 266.591C393.75 266.588 393.78 266.586 393.81 266.583C394.33 266.538 394.807 266.5 395.271 266.5H545.729C546.804 266.5 547.58 266.503 548.508 266.654C549.027 266.755 549.576 266.804 550.036 266.846L550.073 266.849C550.583 266.895 550.993 266.933 551.348 267.004C551.488 267.032 551.627 267.058 551.763 267.085C552.58 267.243 553.325 267.388 553.953 267.637C554.339 267.79 554.741 267.919 555.095 268.033C555.202 268.068 555.305 268.101 555.401 268.133C555.843 268.279 556.26 268.431 556.706 268.652L556.761 268.679L556.819 268.702C557.727 269.062 558.514 269.377 559.292 269.84C559.545 269.99 559.793 270.125 560.015 270.245L560.103 270.292C560.296 270.396 560.467 270.488 560.633 270.584C561.009 270.799 561.285 270.99 561.51 271.213L561.641 271.343L561.8 271.437C562.608 271.918 563.223 272.378 563.839 272.988L564.895 271.923L563.839 272.988C564.233 273.379 564.623 273.717 564.973 274.02L564.987 274.033C565.35 274.347 565.671 274.627 565.988 274.941C566.725 275.671 567.358 276.303 567.818 276.911L567.883 276.996L567.958 277.071C568.37 277.479 568.669 277.904 569.02 278.403C569.196 278.653 569.386 278.923 569.609 279.219C570.091 279.854 570.586 280.67 571.135 281.576C571.6 282.345 571.917 283.123 572.28 284.023C572.639 284.912 572.982 285.762 573.324 286.78L573.339 286.822L573.355 286.863C573.605 287.483 573.75 288.217 573.91 289.027C573.937 289.162 573.964 289.3 573.992 289.439C574.169 290.316 574.321 291.255 574.321 291.982C574.321 292.474 574.367 293 574.408 293.466L574.416 293.556C574.461 294.071 574.5 294.542 574.5 295C574.5 296.074 574.497 296.844 574.342 297.769C574.247 298.329 574.198 298.843 574.156 299.282L574.149 299.361C574.103 299.833 574.064 300.204 573.992 300.561C573.964 300.7 573.937 300.838 573.91 300.973C573.75 301.783 573.605 302.517 573.355 303.137C573.201 303.52 573.069 303.92 572.954 304.271C572.92 304.377 572.886 304.478 572.854 304.574C572.707 305.011 572.554 305.422 572.332 305.863C572.079 306.364 571.895 306.802 571.741 307.167C571.715 307.23 571.689 307.291 571.664 307.35C571.493 307.753 571.347 308.074 571.134 308.424C570.982 308.675 570.846 308.921 570.725 309.142L570.678 309.229C570.572 309.42 570.48 309.589 570.384 309.754C570.167 310.125 569.975 310.398 569.75 310.621L570.806 311.686L569.75 310.621C569.285 311.082 568.945 311.587 568.69 311.966L568.665 312.003C568.385 312.419 568.195 312.695 567.958 312.929C567.565 313.319 567.223 313.706 566.917 314.053L566.905 314.066C566.587 314.426 566.306 314.744 565.988 315.059C565.252 315.788 564.614 316.416 564 316.873C563.629 317.149 563.215 317.468 562.815 317.776C562.432 318.071 562.062 318.357 561.731 318.604C561.28 318.874 560.874 319.143 560.496 319.392L560.486 319.399C560.079 319.668 559.705 319.915 559.292 320.16C558.514 320.623 557.727 320.938 556.819 321.298C555.922 321.654 555.063 321.994 554.035 322.333L553.994 322.347L553.953 322.363C553.325 322.612 552.58 322.757 551.763 322.915C551.627 322.942 551.488 322.968 551.348 322.996C550.464 323.171 549.512 323.322 548.774 323.322H548.651L548.53 323.343C547.592 323.497 546.812 323.5 545.729 323.5H395.271C394.188 323.5 393.408 323.497 392.47 323.343C391.906 323.249 391.389 323.201 390.946 323.159L390.867 323.152C390.39 323.107 390.014 323.068 389.652 322.996C389.512 322.968 389.373 322.942 389.237 322.915C388.42 322.757 387.675 322.612 387.047 322.363C386.662 322.21 386.259 322.081 385.905 321.967C385.798 321.932 385.695 321.899 385.599 321.867C385.157 321.721 384.74 321.569 384.294 321.348L384.239 321.321L384.181 321.298C383.273 320.938 382.486 320.623 381.708 320.16L380.997 321.356L381.708 320.16C381.455 320.01 381.207 319.875 380.985 319.755C380.955 319.739 380.926 319.723 380.897 319.708C380.704 319.604 380.533 319.512 380.367 319.416C379.991 319.201 379.715 319.01 379.49 318.787L379.359 318.657L379.2 318.563C378.392 318.082 377.777 317.622 377.161 317.012C376.767 316.621 376.377 316.283 376.027 315.979L376.013 315.967C375.651 315.653 375.329 315.373 375.012 315.059C374.275 314.329 373.642 313.697 373.182 313.089L373.117 313.004L373.041 312.929C372.63 312.521 372.331 312.096 371.98 311.597C371.804 311.347 371.614 311.077 371.39 310.781L370.213 311.672L371.39 310.781C370.909 310.146 370.414 309.331 369.866 308.424C369.4 307.655 369.083 306.877 368.72 305.977C368.361 305.088 368.018 304.238 367.676 303.22C367.351 302.254 367.187 301.449 367.008 300.561C366.831 299.684 366.679 298.745 366.679 298.018V297.893L366.658 297.769C366.503 296.844 366.5 296.074 366.5 295C366.5 293.926 366.503 293.156 366.658 292.231C366.753 291.671 366.802 291.157 366.844 290.718C366.846 290.692 366.849 290.665 366.851 290.639C366.897 290.167 366.936 289.796 367.008 289.439C367.036 289.3 367.063 289.162 367.09 289.027C367.25 288.217 367.395 287.483 367.645 286.863C367.799 286.48 367.931 286.08 368.046 285.729C368.08 285.623 368.114 285.522 368.146 285.426C368.293 284.989 368.446 284.578 368.668 284.137C368.921 283.636 369.105 283.198 369.259 282.833C369.285 282.77 369.311 282.709 369.336 282.65C369.507 282.247 369.653 281.926 369.866 281.576C370.018 281.325 370.154 281.079 370.275 280.858C370.291 280.829 370.307 280.8 370.322 280.772C370.428 280.58 370.52 280.411 370.616 280.246C370.833 279.875 371.025 279.602 371.25 279.379C371.715 278.918 372.055 278.413 372.31 278.034C372.318 278.021 372.326 278.009 372.335 277.997C372.615 277.581 372.805 277.305 373.041 277.071C373.435 276.681 373.777 276.294 374.083 275.947L374.095 275.934C374.413 275.574 374.694 275.256 375.012 274.941L373.956 273.876L375.012 274.941C375.748 274.212 376.386 273.584 377 273.127Z"
          fill="#277F82"
          stroke="white"
          strokeWidth="3"
        />
        <path
          id="DECISION LOGS"
          d="M400.707 302V287.781H404.906C406.163 287.781 407.276 288.061 408.246 288.621C409.223 289.181 409.978 289.975 410.512 291.004C411.046 292.033 411.312 293.211 411.312 294.539V295.252C411.312 296.6 411.042 297.785 410.502 298.807C409.968 299.829 409.203 300.617 408.207 301.17C407.217 301.723 406.081 302 404.799 302H400.707ZM403.178 289.773V300.027H404.789C406.085 300.027 407.077 299.624 407.768 298.816C408.464 298.003 408.819 296.837 408.832 295.32V294.529C408.832 292.986 408.497 291.808 407.826 290.994C407.156 290.18 406.182 289.773 404.906 289.773H403.178ZM422.084 295.652H416.244V300.027H423.07V302H413.773V287.781H423.002V289.773H416.244V293.699H422.084V295.652ZM435.932 297.371C435.788 298.888 435.229 300.073 434.252 300.926C433.275 301.772 431.977 302.195 430.355 302.195C429.223 302.195 428.223 301.928 427.357 301.395C426.498 300.854 425.834 300.089 425.365 299.1C424.896 298.11 424.652 296.961 424.633 295.652V294.324C424.633 292.983 424.87 291.801 425.346 290.779C425.821 289.757 426.501 288.969 427.387 288.416C428.279 287.863 429.307 287.586 430.473 287.586C432.042 287.586 433.305 288.012 434.262 288.865C435.219 289.718 435.775 290.923 435.932 292.479H433.471C433.354 291.456 433.054 290.721 432.572 290.271C432.097 289.816 431.397 289.588 430.473 289.588C429.398 289.588 428.572 289.982 427.992 290.77C427.419 291.551 427.126 292.7 427.113 294.217V295.477C427.113 297.013 427.387 298.185 427.934 298.992C428.487 299.799 429.294 300.203 430.355 300.203C431.326 300.203 432.055 299.985 432.543 299.549C433.031 299.113 433.34 298.387 433.471 297.371H435.932ZM440.756 302H438.295V287.781H440.756V302ZM451.225 298.338C451.225 297.713 451.003 297.231 450.561 296.893C450.124 296.554 449.333 296.212 448.188 295.867C447.042 295.522 446.13 295.138 445.453 294.715C444.158 293.901 443.51 292.84 443.51 291.531C443.51 290.385 443.975 289.441 444.906 288.699C445.844 287.957 447.058 287.586 448.549 287.586C449.538 287.586 450.421 287.768 451.195 288.133C451.97 288.497 452.579 289.018 453.021 289.695C453.464 290.366 453.686 291.111 453.686 291.932H451.225C451.225 291.189 450.99 290.61 450.521 290.193C450.059 289.77 449.395 289.559 448.529 289.559C447.722 289.559 447.094 289.731 446.645 290.076C446.202 290.421 445.98 290.903 445.98 291.521C445.98 292.042 446.221 292.479 446.703 292.83C447.185 293.175 447.979 293.514 449.086 293.846C450.193 294.171 451.081 294.546 451.752 294.969C452.423 295.385 452.914 295.867 453.227 296.414C453.539 296.954 453.695 297.589 453.695 298.318C453.695 299.503 453.24 300.447 452.328 301.15C451.423 301.847 450.193 302.195 448.637 302.195C447.608 302.195 446.661 302.007 445.795 301.629C444.936 301.245 444.265 300.717 443.783 300.047C443.308 299.376 443.07 298.595 443.07 297.703H445.541C445.541 298.51 445.808 299.135 446.342 299.578C446.876 300.021 447.641 300.242 448.637 300.242C449.496 300.242 450.141 300.07 450.57 299.725C451.007 299.373 451.225 298.911 451.225 298.338ZM458.471 302H456.01V287.781H458.471V302ZM472.855 295.262C472.855 296.655 472.615 297.879 472.133 298.934C471.651 299.982 470.961 300.789 470.062 301.355C469.171 301.915 468.142 302.195 466.977 302.195C465.824 302.195 464.796 301.915 463.891 301.355C462.992 300.789 462.296 299.985 461.801 298.943C461.312 297.902 461.065 296.701 461.059 295.34V294.539C461.059 293.152 461.303 291.928 461.791 290.867C462.286 289.806 462.979 288.995 463.871 288.436C464.77 287.869 465.798 287.586 466.957 287.586C468.116 287.586 469.141 287.866 470.033 288.426C470.932 288.979 471.625 289.78 472.113 290.828C472.602 291.87 472.849 293.084 472.855 294.471V295.262ZM470.385 294.52C470.385 292.944 470.085 291.736 469.486 290.896C468.894 290.057 468.051 289.637 466.957 289.637C465.889 289.637 465.053 290.057 464.447 290.896C463.848 291.73 463.542 292.911 463.529 294.441V295.262C463.529 296.824 463.832 298.032 464.438 298.885C465.049 299.738 465.896 300.164 466.977 300.164C468.07 300.164 468.91 299.747 469.496 298.914C470.089 298.081 470.385 296.863 470.385 295.262V294.52ZM486.596 302H484.125L477.787 291.912V302H475.316V287.781H477.787L484.145 297.908V287.781H486.596V302ZM496.967 300.027H503.422V302H494.496V287.781H496.967V300.027ZM516.039 295.262C516.039 296.655 515.798 297.879 515.316 298.934C514.835 299.982 514.145 300.789 513.246 301.355C512.354 301.915 511.326 302.195 510.16 302.195C509.008 302.195 507.979 301.915 507.074 301.355C506.176 300.789 505.479 299.985 504.984 298.943C504.496 297.902 504.249 296.701 504.242 295.34V294.539C504.242 293.152 504.486 291.928 504.975 290.867C505.469 289.806 506.163 288.995 507.055 288.436C507.953 287.869 508.982 287.586 510.141 287.586C511.299 287.586 512.325 287.866 513.217 288.426C514.115 288.979 514.809 289.78 515.297 290.828C515.785 291.87 516.033 293.084 516.039 294.471V295.262ZM513.568 294.52C513.568 292.944 513.269 291.736 512.67 290.896C512.077 290.057 511.234 289.637 510.141 289.637C509.073 289.637 508.236 290.057 507.631 290.896C507.032 291.73 506.726 292.911 506.713 294.441V295.262C506.713 296.824 507.016 298.032 507.621 298.885C508.233 299.738 509.079 300.164 510.16 300.164C511.254 300.164 512.094 299.747 512.68 298.914C513.272 298.081 513.568 296.863 513.568 295.262V294.52ZM529.398 300.154C528.884 300.825 528.171 301.333 527.26 301.678C526.348 302.023 525.313 302.195 524.154 302.195C522.963 302.195 521.908 301.925 520.99 301.385C520.072 300.844 519.363 300.073 518.861 299.07C518.367 298.061 518.109 296.886 518.09 295.545V294.432C518.09 292.283 518.604 290.607 519.633 289.402C520.661 288.191 522.097 287.586 523.939 287.586C525.521 287.586 526.778 287.977 527.709 288.758C528.64 289.539 529.2 290.665 529.389 292.137H526.967C526.693 290.424 525.701 289.568 523.988 289.568C522.882 289.568 522.038 289.969 521.459 290.77C520.886 291.564 520.59 292.732 520.57 294.275V295.369C520.57 296.906 520.893 298.1 521.537 298.953C522.188 299.799 523.09 300.223 524.242 300.223C525.505 300.223 526.404 299.936 526.938 299.363V296.58H524.008V294.705H529.398V300.154ZM539.545 298.338C539.545 297.713 539.324 297.231 538.881 296.893C538.445 296.554 537.654 296.212 536.508 295.867C535.362 295.522 534.451 295.138 533.773 294.715C532.478 293.901 531.83 292.84 531.83 291.531C531.83 290.385 532.296 289.441 533.227 288.699C534.164 287.957 535.378 287.586 536.869 287.586C537.859 287.586 538.741 287.768 539.516 288.133C540.29 288.497 540.899 289.018 541.342 289.695C541.785 290.366 542.006 291.111 542.006 291.932H539.545C539.545 291.189 539.311 290.61 538.842 290.193C538.38 289.77 537.715 289.559 536.85 289.559C536.042 289.559 535.414 289.731 534.965 290.076C534.522 290.421 534.301 290.903 534.301 291.521C534.301 292.042 534.542 292.479 535.023 292.83C535.505 293.175 536.299 293.514 537.406 293.846C538.513 294.171 539.402 294.546 540.072 294.969C540.743 295.385 541.234 295.867 541.547 296.414C541.859 296.954 542.016 297.589 542.016 298.318C542.016 299.503 541.56 300.447 540.648 301.15C539.743 301.847 538.513 302.195 536.957 302.195C535.928 302.195 534.981 302.007 534.115 301.629C533.256 301.245 532.585 300.717 532.104 300.047C531.628 299.376 531.391 298.595 531.391 297.703H533.861C533.861 298.51 534.128 299.135 534.662 299.578C535.196 300.021 535.961 300.242 536.957 300.242C537.816 300.242 538.461 300.07 538.891 299.725C539.327 299.373 539.545 298.911 539.545 298.338Z"
          fill="white"
        />
      </g>
      <g id="policy" filter="url(#filterPolicy)">
        <path
          id="Vector_57"
          d="M377 273.127L377.086 273.063L377.161 272.988C377.573 272.58 378.002 272.284 378.506 271.936C378.741 271.773 378.993 271.599 379.267 271.398C379.718 271.127 380.125 270.858 380.504 270.608L380.514 270.601C380.921 270.332 381.295 270.085 381.708 269.84C382.486 269.377 383.273 269.062 384.181 268.702C385.078 268.346 385.937 268.006 386.965 267.667L387.006 267.653L387.047 267.637C387.675 267.388 388.42 267.243 389.237 267.085C389.373 267.058 389.512 267.032 389.652 267.004C390.536 266.829 391.488 266.678 392.226 266.678C392.72 266.678 393.249 266.632 393.72 266.591C393.75 266.588 393.78 266.586 393.81 266.583C394.33 266.538 394.807 266.5 395.271 266.5H545.729C546.804 266.5 547.58 266.503 548.508 266.654C549.027 266.755 549.576 266.804 550.036 266.846L550.073 266.849C550.583 266.895 550.993 266.933 551.348 267.004C551.488 267.032 551.627 267.058 551.763 267.085C552.58 267.243 553.325 267.388 553.953 267.637C554.339 267.79 554.741 267.919 555.095 268.033C555.202 268.068 555.305 268.101 555.401 268.133C555.843 268.279 556.26 268.431 556.706 268.652L556.761 268.679L556.819 268.702C557.727 269.062 558.514 269.377 559.292 269.84C559.545 269.99 559.793 270.125 560.015 270.245L560.103 270.292C560.296 270.396 560.467 270.488 560.633 270.584C561.009 270.799 561.285 270.99 561.51 271.213L561.641 271.343L561.8 271.437C562.608 271.918 563.223 272.378 563.839 272.988L564.895 271.923L563.839 272.988C564.233 273.379 564.623 273.717 564.973 274.02L564.987 274.033C565.35 274.347 565.671 274.627 565.988 274.941C566.725 275.671 567.358 276.303 567.818 276.911L567.883 276.996L567.958 277.071C568.37 277.479 568.669 277.904 569.02 278.403C569.196 278.653 569.386 278.923 569.609 279.219C570.091 279.854 570.586 280.67 571.135 281.576C571.6 282.345 571.917 283.123 572.28 284.023C572.639 284.912 572.982 285.762 573.324 286.78L573.339 286.822L573.355 286.863C573.605 287.483 573.75 288.217 573.91 289.027C573.937 289.162 573.964 289.3 573.992 289.439C574.169 290.316 574.321 291.255 574.321 291.982C574.321 292.474 574.367 293 574.408 293.466L574.416 293.556C574.461 294.071 574.5 294.542 574.5 295C574.5 296.074 574.497 296.844 574.342 297.769C574.247 298.329 574.198 298.843 574.156 299.282L574.149 299.361C574.103 299.833 574.064 300.204 573.992 300.561C573.964 300.7 573.937 300.838 573.91 300.973C573.75 301.783 573.605 302.517 573.355 303.137C573.201 303.52 573.069 303.92 572.954 304.271C572.92 304.377 572.886 304.478 572.854 304.574C572.707 305.011 572.554 305.422 572.332 305.863C572.079 306.364 571.895 306.802 571.741 307.167C571.715 307.23 571.689 307.291 571.664 307.35C571.493 307.753 571.347 308.074 571.134 308.424C570.982 308.675 570.846 308.921 570.725 309.142L570.678 309.229C570.572 309.42 570.48 309.589 570.384 309.754C570.167 310.125 569.975 310.398 569.75 310.621L570.806 311.686L569.75 310.621C569.285 311.082 568.945 311.587 568.69 311.966L568.665 312.003C568.385 312.419 568.195 312.695 567.958 312.929C567.565 313.319 567.223 313.706 566.917 314.053L566.905 314.066C566.587 314.426 566.306 314.744 565.988 315.059C565.252 315.788 564.614 316.416 564 316.873C563.629 317.149 563.215 317.468 562.815 317.776C562.432 318.071 562.062 318.357 561.731 318.604C561.28 318.874 560.874 319.143 560.496 319.392L560.486 319.399C560.079 319.668 559.705 319.915 559.292 320.16C558.514 320.623 557.727 320.938 556.819 321.298C555.922 321.654 555.063 321.994 554.035 322.333L553.994 322.347L553.953 322.363C553.325 322.612 552.58 322.757 551.763 322.915C551.627 322.942 551.488 322.968 551.348 322.996C550.464 323.171 549.512 323.322 548.774 323.322H548.651L548.53 323.343C547.592 323.497 546.812 323.5 545.729 323.5H395.271C394.188 323.5 393.408 323.497 392.47 323.343C391.906 323.249 391.389 323.201 390.946 323.159L390.867 323.152C390.39 323.107 390.014 323.068 389.652 322.996C389.512 322.968 389.373 322.942 389.237 322.915C388.42 322.757 387.675 322.612 387.047 322.363C386.662 322.21 386.259 322.081 385.905 321.967C385.798 321.932 385.695 321.899 385.599 321.867C385.157 321.721 384.74 321.569 384.294 321.348L384.239 321.321L384.181 321.298C383.273 320.938 382.486 320.623 381.708 320.16L380.997 321.356L381.708 320.16C381.455 320.01 381.207 319.875 380.985 319.755C380.955 319.739 380.926 319.723 380.897 319.708C380.704 319.604 380.533 319.512 380.367 319.416C379.991 319.201 379.715 319.01 379.49 318.787L379.359 318.657L379.2 318.563C378.392 318.082 377.777 317.622 377.161 317.012C376.767 316.621 376.377 316.283 376.027 315.979L376.013 315.967C375.651 315.653 375.329 315.373 375.012 315.059C374.275 314.329 373.642 313.697 373.182 313.089L373.117 313.004L373.041 312.929C372.63 312.521 372.331 312.096 371.98 311.597C371.804 311.347 371.614 311.077 371.39 310.781L370.213 311.672L371.39 310.781C370.909 310.146 370.414 309.331 369.866 308.424C369.4 307.655 369.083 306.877 368.72 305.977C368.361 305.088 368.018 304.238 367.676 303.22C367.351 302.254 367.187 301.449 367.008 300.561C366.831 299.684 366.679 298.745 366.679 298.018V297.893L366.658 297.769C366.503 296.844 366.5 296.074 366.5 295C366.5 293.926 366.503 293.156 366.658 292.231C366.753 291.671 366.802 291.157 366.844 290.718C366.846 290.692 366.849 290.665 366.851 290.639C366.897 290.167 366.936 289.796 367.008 289.439C367.036 289.3 367.063 289.162 367.09 289.027C367.25 288.217 367.395 287.483 367.645 286.863C367.799 286.48 367.931 286.08 368.046 285.729C368.08 285.623 368.114 285.522 368.146 285.426C368.293 284.989 368.446 284.578 368.668 284.137C368.921 283.636 369.105 283.198 369.259 282.833C369.285 282.77 369.311 282.709 369.336 282.65C369.507 282.247 369.653 281.926 369.866 281.576C370.018 281.325 370.154 281.079 370.275 280.858C370.291 280.829 370.307 280.8 370.322 280.772C370.428 280.58 370.52 280.411 370.616 280.246C370.833 279.875 371.025 279.602 371.25 279.379C371.715 278.918 372.055 278.413 372.31 278.034C372.318 278.021 372.326 278.009 372.335 277.997C372.615 277.581 372.805 277.305 373.041 277.071C373.435 276.681 373.777 276.294 374.083 275.947L374.095 275.934C374.413 275.574 374.694 275.256 375.012 274.941L373.956 273.876L375.012 274.941C375.748 274.212 376.386 273.584 377 273.127Z"
          fill="#277F82"
          stroke="white"
          strokeWidth="3"
        />
        <path
          id="POLICY AS CODE"
          d="M397.955 296.717V302H395.484V287.781H400.924C402.512 287.781 403.772 288.195 404.703 289.021C405.641 289.848 406.109 290.942 406.109 292.303C406.109 293.696 405.65 294.78 404.732 295.555C403.821 296.329 402.542 296.717 400.895 296.717H397.955ZM397.955 294.734H400.924C401.803 294.734 402.473 294.529 402.936 294.119C403.398 293.702 403.629 293.104 403.629 292.322C403.629 291.554 403.395 290.942 402.926 290.486C402.457 290.024 401.812 289.786 400.992 289.773H397.955V294.734ZM419.625 295.262C419.625 296.655 419.384 297.879 418.902 298.934C418.421 299.982 417.73 300.789 416.832 301.355C415.94 301.915 414.911 302.195 413.746 302.195C412.594 302.195 411.565 301.915 410.66 301.355C409.762 300.789 409.065 299.985 408.57 298.943C408.082 297.902 407.835 296.701 407.828 295.34V294.539C407.828 293.152 408.072 291.928 408.561 290.867C409.055 289.806 409.749 288.995 410.641 288.436C411.539 287.869 412.568 287.586 413.727 287.586C414.885 287.586 415.911 287.866 416.803 288.426C417.701 288.979 418.395 289.78 418.883 290.828C419.371 291.87 419.618 293.084 419.625 294.471V295.262ZM417.154 294.52C417.154 292.944 416.855 291.736 416.256 290.896C415.663 290.057 414.82 289.637 413.727 289.637C412.659 289.637 411.822 290.057 411.217 290.896C410.618 291.73 410.312 292.911 410.299 294.441V295.262C410.299 296.824 410.602 298.032 411.207 298.885C411.819 299.738 412.665 300.164 413.746 300.164C414.84 300.164 415.68 299.747 416.266 298.914C416.858 298.081 417.154 296.863 417.154 295.262V294.52ZM424.557 300.027H431.012V302H422.086V287.781H424.557V300.027ZM435.514 302H433.053V287.781H435.514V302ZM449.4 297.371C449.257 298.888 448.697 300.073 447.721 300.926C446.744 301.772 445.445 302.195 443.824 302.195C442.691 302.195 441.692 301.928 440.826 301.395C439.967 300.854 439.303 300.089 438.834 299.1C438.365 298.11 438.121 296.961 438.102 295.652V294.324C438.102 292.983 438.339 291.801 438.814 290.779C439.29 289.757 439.97 288.969 440.855 288.416C441.747 287.863 442.776 287.586 443.941 287.586C445.51 287.586 446.773 288.012 447.73 288.865C448.688 289.718 449.244 290.923 449.4 292.479H446.939C446.822 291.456 446.523 290.721 446.041 290.271C445.566 289.816 444.866 289.588 443.941 289.588C442.867 289.588 442.04 289.982 441.461 290.77C440.888 291.551 440.595 292.7 440.582 294.217V295.477C440.582 297.013 440.855 298.185 441.402 298.992C441.956 299.799 442.763 300.203 443.824 300.203C444.794 300.203 445.523 299.985 446.012 299.549C446.5 299.113 446.809 298.387 446.939 297.371H449.4ZM456.256 294.52L459.527 287.781H462.262L457.496 296.766V302H455.016V296.766L450.24 287.781H452.984L456.256 294.52ZM476.744 298.689H471.236L470.084 302H467.516L472.887 287.781H475.104L480.484 302H477.906L476.744 298.689ZM471.93 296.697H476.051L473.99 290.799L471.93 296.697ZM489.537 298.338C489.537 297.713 489.316 297.231 488.873 296.893C488.437 296.554 487.646 296.212 486.5 295.867C485.354 295.522 484.443 295.138 483.766 294.715C482.47 293.901 481.822 292.84 481.822 291.531C481.822 290.385 482.288 289.441 483.219 288.699C484.156 287.957 485.37 287.586 486.861 287.586C487.851 287.586 488.733 287.768 489.508 288.133C490.283 288.497 490.891 289.018 491.334 289.695C491.777 290.366 491.998 291.111 491.998 291.932H489.537C489.537 291.189 489.303 290.61 488.834 290.193C488.372 289.77 487.708 289.559 486.842 289.559C486.035 289.559 485.406 289.731 484.957 290.076C484.514 290.421 484.293 290.903 484.293 291.521C484.293 292.042 484.534 292.479 485.016 292.83C485.497 293.175 486.292 293.514 487.398 293.846C488.505 294.171 489.394 294.546 490.064 294.969C490.735 295.385 491.227 295.867 491.539 296.414C491.852 296.954 492.008 297.589 492.008 298.318C492.008 299.503 491.552 300.447 490.641 301.15C489.736 301.847 488.505 302.195 486.949 302.195C485.921 302.195 484.973 302.007 484.107 301.629C483.248 301.245 482.577 300.717 482.096 300.047C481.62 299.376 481.383 298.595 481.383 297.703H483.854C483.854 298.51 484.12 299.135 484.654 299.578C485.188 300.021 485.953 300.242 486.949 300.242C487.809 300.242 488.453 300.07 488.883 299.725C489.319 299.373 489.537 298.911 489.537 298.338ZM510.006 297.371C509.863 298.888 509.303 300.073 508.326 300.926C507.35 301.772 506.051 302.195 504.43 302.195C503.297 302.195 502.298 301.928 501.432 301.395C500.572 300.854 499.908 300.089 499.439 299.1C498.971 298.11 498.727 296.961 498.707 295.652V294.324C498.707 292.983 498.945 291.801 499.42 290.779C499.895 289.757 500.576 288.969 501.461 288.416C502.353 287.863 503.382 287.586 504.547 287.586C506.116 287.586 507.379 288.012 508.336 288.865C509.293 289.718 509.85 290.923 510.006 292.479H507.545C507.428 291.456 507.128 290.721 506.646 290.271C506.171 289.816 505.471 289.588 504.547 289.588C503.473 289.588 502.646 289.982 502.066 290.77C501.493 291.551 501.201 292.7 501.188 294.217V295.477C501.188 297.013 501.461 298.185 502.008 298.992C502.561 299.799 503.368 300.203 504.43 300.203C505.4 300.203 506.129 299.985 506.617 299.549C507.105 299.113 507.415 298.387 507.545 297.371H510.006ZM523.57 295.262C523.57 296.655 523.329 297.879 522.848 298.934C522.366 299.982 521.676 300.789 520.777 301.355C519.885 301.915 518.857 302.195 517.691 302.195C516.539 302.195 515.51 301.915 514.605 301.355C513.707 300.789 513.01 299.985 512.516 298.943C512.027 297.902 511.78 296.701 511.773 295.34V294.539C511.773 293.152 512.018 291.928 512.506 290.867C513.001 289.806 513.694 288.995 514.586 288.436C515.484 287.869 516.513 287.586 517.672 287.586C518.831 287.586 519.856 287.866 520.748 288.426C521.646 288.979 522.34 289.78 522.828 290.828C523.316 291.87 523.564 293.084 523.57 294.471V295.262ZM521.1 294.52C521.1 292.944 520.8 291.736 520.201 290.896C519.609 290.057 518.766 289.637 517.672 289.637C516.604 289.637 515.768 290.057 515.162 290.896C514.563 291.73 514.257 292.911 514.244 294.441V295.262C514.244 296.824 514.547 298.032 515.152 298.885C515.764 299.738 516.611 300.164 517.691 300.164C518.785 300.164 519.625 299.747 520.211 298.914C520.803 298.081 521.1 296.863 521.1 295.262V294.52ZM526.031 302V287.781H530.23C531.487 287.781 532.6 288.061 533.57 288.621C534.547 289.181 535.302 289.975 535.836 291.004C536.37 292.033 536.637 293.211 536.637 294.539V295.252C536.637 296.6 536.367 297.785 535.826 298.807C535.292 299.829 534.527 300.617 533.531 301.17C532.542 301.723 531.406 302 530.123 302H526.031ZM528.502 289.773V300.027H530.113C531.409 300.027 532.402 299.624 533.092 298.816C533.788 298.003 534.143 296.837 534.156 295.32V294.529C534.156 292.986 533.821 291.808 533.15 290.994C532.48 290.18 531.507 289.773 530.23 289.773H528.502ZM547.408 295.652H541.568V300.027H548.395V302H539.098V287.781H548.326V289.773H541.568V293.699H547.408V295.652Z"
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
      <defs>
        <filter
          id="filterPolicy"
          data-filter
          x="345"
          y="245"
          width="251"
          height="100"
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
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0.10980392156862745 0 0 0 0 0 0.2823529411764706 0 0 0 0 0 0.2901960784313726 0 0 0 0 0 1 0"
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
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
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
      </defs>
    </svg>
  )
}

export default Animation
