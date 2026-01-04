import React from "react";
import clsx from "clsx";

import css from "./PoliciesPage.module.css";

const PoliciesPage = () => {
  return (
    <section className={css.container}>
      <div>
        <h1 className={css.mainTitle}>
          Rental Agreement and Policies (Effective: October 2025)
        </h1>
        <p>
          Welcome to DriveNow. These policies are designed to ensure a
          transparent, safe, and convenient vehicle rental experience. By
          confirming a booking, the Renter agrees to the terms and conditions
          outlined below.
        </p>
      </div>
      <ul className={css.container}>
        <li>
          <h2 className={css.title}>General Rental Requirements</h2>
          <ul className={css.list}>
            <li>
              <p>
                <span className={css.accentText}>Minimum Age: </span>
                The primary Renter and all authorized drivers must be at least
                21 years of age. For Premium, Luxury, and specialty vehicle
                categories, the minimum age is 25.
              </p>
            </li>
            <li>
              <p>
                <span className={css.accentText}>Driver`s License: </span>A
                valid, non-probationary driver's license, held for a minimum of
                one (1) continuous year, is required. International Renters must
                present their home country license along with an International
                Driving Permit (IDP) if the home license is not in English.
              </p>
            </li>
            <li>
              <p>
                <span className={css.accentText}>Identification: </span>A valid
                Passport or National Identity Card is required.
              </p>
            </li>
            <li>
              <p>
                <span className={css.accentText}>
                  Payment & Security Deposit:{" "}
                </span>
                A major credit card in the name of the primary Renter is
                mandatory for the security deposit and final payment. The
                deposit amount varies based on the vehicle class and selected
                insurance plan.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h2 className={css.title}>Documentation and Agreement </h2>
          <p className={css.describtion}>
            At the time of vehicle pickup, the Renter must physically present
            all required documents. The Rental Agreement will specify:
          </p>
          <ul className={clsx(css.list, css.styledList)}>
            <li>
              <p>
                The rented vehicle's specifics (make, model, license plate,
                mileage).
              </p>
            </li>
            <li>
              <p>
                The agreed-upon rental duration, pickup, and return
                locations/times.
              </p>
            </li>
            <li>
              <p>
                The total cost, including all mandatory fees, taxes, and the
                chosen Protection Plan (Basic or Full Coverage).
              </p>
            </li>
            <li>
              <p>The security deposit amount.</p>
            </li>
          </ul>
        </li>
        <li id="plans">
          <h2 className={css.title}>Vehicle Protection and Insurance Plans</h2>
          <p className={css.describtion}>
            All vehicles are covered by legally required Third-Party Liability
            Insurance. The Renter's financial responsibility for damage to the
            rental vehicle itself is determined by the chosen Protection Plan.
          </p>
          <ul className={css.planList}>
            <li>
              <h3 className={clsx(css.plan, css.redPlan)}>
                Basic Protection Plan (Standard/Included)
              </h3>
              <ul className={css.list}>
                <li>
                  <p>
                    <span className={css.accentText}>Cost: </span> Included in
                    the base rental price.
                  </p>
                </li>
                <li>
                  <p>
                    <span className={css.accentText}>
                      Security Deposit Required:{" "}
                    </span>
                    A mandatory{" "}
                    <span className={css.accentText}>
                      $700 Security Deposit
                    </span>{" "}
                    is required at the time of pickup. This amount is blocked
                    (held) on the Renter's credit card and is fully refundable
                    only upon the vehicle's return in the exact same condition
                    as at pickup. return.
                  </p>
                </li>
                <li>
                  <p>
                    <span className={css.accentText}>Coverage: </span>
                    Provides Third-Party Liability only (covers damages to other
                    vehicles or property).
                  </p>
                </li>

                <li>
                  <p>
                    <span className={css.accentText}>
                      Renter Responsibility:{" "}
                    </span>
                    Under this plan, the Renter assumes full and total financial
                    responsibility for all damages (including minor scratches,
                    dents, collision, or technical issues resulting from misuse)
                    up to the full market value of the vehicle. Any repair costs
                    will be deducted from the $700 security deposit first, with
                    the Renter liable for any costs exceeding the deposit
                    amount.
                  </p>
                </li>
                <li>
                  <p>
                    <span className={css.accentText}>Recommendation: </span>This
                    plan is suitable for Renters with robust private rental car
                    insurance policies that extend coverage to rental vehicles.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <h3 className={clsx(css.plan, css.greenPlan)}>
                Full Coverage Protection Plan (Recommended)
              </h3>
              <ul className={css.list}>
                <li>
                  <p>
                    <span className={css.accentText}>Cost: </span>The daily
                    rental rate is increased by 30%.
                  </p>
                </li>
                <li>
                  <p>
                    <span className={css.accentText}>
                      Security Deposit Required: NO Security Deposit is
                      required.{" "}
                    </span>
                    The increased daily rate covers all potential liability and
                    related administrative costs.
                  </p>
                </li>
                <li>
                  <p>
                    <span className={css.accentText}>
                      Zero-Liability Coverage:
                    </span>
                    This plan provides zero financial liability for the Renter,
                    covering:
                  </p>
                  <ul className={css.styledList}>
                    <li>
                      <p>
                        100% of costs for accidental damage (e.g., collision,
                        scratches, dents).
                      </p>
                    </li>
                    <li>
                      <p>Loss due to vehicle theft.</p>
                    </li>
                    <li>
                      <p>
                        Roadside assistance and necessary technical repairs not
                        caused by negligent driving.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <span className={css.accentText}>Exclusive Benefits: </span>
                    Renters selecting this plan receive additional perks,
                    including a Fuel Policy Waiver (the vehicle is provided with
                    a full tank of fuel at pickup, and you are not required to
                    refill it before return) and an Expedited Return Process due
                    to zero liability and minimal inspection requirements.
                  </p>
                </li>
                <li>
                  <p>
                    <span className={css.accentText}>Recommendation: </span>
                    This plan offers maximum convenience, eliminating the need
                    to tie up funds for a deposit and providing absolute
                    protection against unexpected costs.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h2 className={css.title}>Use of Vehicle and Renter Obligations</h2>
          <ul className={css.list}>
            <li>
              <p>
                <span className={css.accentText}>Authorized Drivers: </span>Only
                the Renter and additional drivers listed and approved on the
                Rental Agreement may operate the vehicle.
              </p>
            </li>
            <li>
              <p>
                <span className={css.accentText}>Fuel Policy: </span>The vehicle
                will be provided with a full tank of fuel and must be returned
                with a full tank. A refueling service charge plus the cost of
                missing fuel will be applied if the vehicle is returned with a
                lower fuel level.
              </p>
            </li>
            <li>
              <p>
                <span className={css.accentText}>Prohibited Use: </span>The
                vehicle must not be used for racing, towing, commercial
                transport, or driven on unpaved roads (unless specified).
                Smoking in the vehicle is strictly prohibited and subject to a
                cleaning fee of $250.
              </p>
            </li>
            <li>
              <p>
                <span className={css.accentText}>Maintenance: </span>The Renter
                is responsible for checking fluid levels (oil, water) and tire
                pressure during the rental period.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h2 className={css.title}>Accident and Emergency Procedures</h2>
          <p className={css.describtion}>
            In the event of an accident, theft, or mechanical breakdown:
          </p>
          <ol className={css.list}>
            <li>
              <p>Ensure the safety of all parties.</p>
            </li>
            <li>
              <p>
                Immediately notify the local police (911/emergency services) and
                obtain a police report. This is mandatory for all insurance
                claims.
              </p>
            </li>
            <li>
              <p>
                Contact our 24/7 Roadside Assistance Line at [Your Phone
                Number].
              </p>
            </li>
            <li>
              <p>
                Do not admit fault or authorize any repairs without prior
                written consent from [Your Company Name].
              </p>
            </li>
            <li>
              <p>
                Failure to provide a police report or follow the proper
                procedure may void the Protection Plan and result in the Renter
                being fully responsible for all costs.
              </p>
            </li>
          </ol>
        </li>

        <li>
          <h2 className={css.title}>Cancellations and Returns</h2>
          <ul className={css.list}>
            <li>
              <p>
                <span className={css.accentText}>Cancellation Policy: </span>
                Free cancellation is permitted up to 48 hours before the
                scheduled pickup time. Cancellations made within 48 hours are
                subject to a fee equal to one (1) day's rental charge. No-shows
                will be charged the full rental price.
              </p>
            </li>
            <li>
              <p>
                <span className={css.accentText}>Vehicle Return: </span>The
                vehicle must be returned to the agreed location and time. Late
                returns without prior authorization will incur an additional
                daily rental charge.
              </p>
            </li>
            <li>
              <p>
                <span className={css.accentText}>Early Returns: </span>No refund
                is provided for unused days if the vehicle is returned before
                the agreed-upon return date.
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default PoliciesPage;
